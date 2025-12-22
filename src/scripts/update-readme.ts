import {spawn} from 'node:child_process';
import {readdir, readFile, writeFile, mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join, basename} from 'node:path';
import {stripVTControlCharacters} from 'node:util';
import type {trial, ctx} from 'mitata';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

type Engine = 'node' | 'bun' | 'deno';

const ENGINES: Engine[] = ['node', 'bun', 'deno'];

interface BenchmarkResult {
  suite: string;
  engine: Engine;
  output: string;
}

async function getSuiteNames(): Promise<string[]> {
  const benchmarksDir = join(__dirname, '../benchmarks');
  const files = await readdir(benchmarksDir);

  return files.filter((f) => f.endsWith('.ts')).map((f) => basename(f, '.ts'));
}

async function runBenchmark(
  engine: Engine,
  suiteName: string
): Promise<string> {
  const cliPath = join(__dirname, '../run-suite.ts');

  let command: string;
  let args: string[];

  if (engine === 'node') {
    command = 'node';
    args = ['--expose-gc', cliPath, suiteName, '--json'];
  } else if (engine === 'bun') {
    command = 'bun';
    args = ['--expose-gc', cliPath, suiteName, '--json'];
  } else {
    command = 'deno';
    args = [
      'run',
      '--allow-all',
      '--v8-flags=--expose-gc',
      cliPath,
      suiteName,
      '--json'
    ];
  }

  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: ['inherit', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Process exited with code ${code}\n${stderr}`));
      } else {
        resolve(stdout.trim());
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}

interface MitataResult {
  benchmarks: trial[];
  context: ctx;
}

interface BenchmarkRow {
  engine: Engine;
  benchmark: trial;
}

function parseJSONOutput(output: string): MitataResult | null {
  const cleaned = stripVTControlCharacters(output);

  // Filter out Node.js warnings and find the JSON line
  const lines = cleaned.split('\n');
  const jsonLine = lines.find((line) => {
    const trimmed = line.trim();
    return trimmed.startsWith('{') && trimmed.includes('"benchmarks"');
  });

  if (!jsonLine) {
    return null;
  }

  try {
    return JSON.parse(jsonLine) as MitataResult;
  } catch {
    return null;
  }
}

function formatTime(ns: number): string {
  if (ns < 1000) return `${ns.toFixed(2)} ns`;
  if (ns < 1000000) return `${(ns / 1000).toFixed(2)} µs`;
  if (ns < 1000000000) return `${(ns / 1000000).toFixed(2)} ms`;
  return `${(ns / 1000000000).toFixed(2)} s`;
}

function formatBytes(bytes: number): string {
  if (bytes < 1) return `${bytes.toFixed(4)} B`;
  if (bytes < 1024) return `${bytes.toFixed(2)} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function formatSuiteAsMarkdown(
  suite: string,
  results: BenchmarkResult[]
): string {
  let markdown = `# ${suite}\n\n`;

  const rows: BenchmarkRow[] = [];

  for (const engine of ENGINES) {
    const result = results.find(
      (r) => r.suite === suite && r.engine === engine
    );

    if (result) {
      const parsed = parseJSONOutput(result.output);
      if (parsed?.benchmarks) {
        for (const benchmark of parsed.benchmarks) {
          rows.push({engine, benchmark});
        }
      }
    }
  }

  // Sort by avg time ascending (fastest first)
  rows.sort((a, b) => {
    const aStats = a.benchmark.runs[0]?.stats;
    const bStats = b.benchmark.runs[0]?.stats;
    return (aStats?.avg ?? 0) - (bStats?.avg ?? 0);
  });

  markdown += '## Performance\n\n';
  markdown += '| benchmark | avg | min | p75 | p99 | max |\n';
  markdown += '| :-------- | --: | --: | --: | --: | --: |\n';

  for (const row of rows) {
    const run = row.benchmark.runs[0];
    if (!run?.stats) continue;

    const nameWithEngine = `${run.name} (${row.engine})`;
    const stats = run.stats;
    markdown += `| ${nameWithEngine} | ${formatTime(stats.avg)} | ${formatTime(stats.min)} | ${formatTime(stats.p75)} | ${formatTime(stats.p99)} | ${formatTime(stats.max)} |\n`;
  }

  markdown += '\n';

  const rowsWithHeap = rows.filter((row) => row.benchmark.runs[0]?.stats?.heap);
  if (rowsWithHeap.length > 0) {
    rowsWithHeap.sort((a, b) => {
      const aHeap = a.benchmark.runs[0]?.stats?.heap;
      const bHeap = b.benchmark.runs[0]?.stats?.heap;
      return (aHeap?.avg ?? 0) - (bHeap?.avg ?? 0);
    });

    markdown += '## Memory\n\n';
    markdown += '| benchmark | avg | min | max | total |\n';
    markdown += '| :-------- | --: | --: | --: | ----: |\n';

    for (const row of rowsWithHeap) {
      const run = row.benchmark.runs[0];
      const heap = run?.stats?.heap;
      if (!heap) continue;

      const nameWithEngine = `${run.name} (${row.engine})`;
      markdown += `| ${nameWithEngine} | ${formatBytes(heap.avg)} | ${formatBytes(heap.min)} | ${formatBytes(heap.max)} | ${formatBytes(heap.total)} |\n`;
    }

    markdown += '\n';
  }

  return markdown;
}

async function writeSuiteResult(
  suite: string,
  results: BenchmarkResult[]
): Promise<void> {
  const resultsDir = join(__dirname, '../../results');
  await mkdir(resultsDir, {recursive: true});

  const markdown = formatSuiteAsMarkdown(suite, results);
  const resultPath = join(resultsDir, `${suite}.md`);

  await writeFile(resultPath, markdown, 'utf-8');
  console.log(`  ✓ Written results/${suite}.md`);
}

async function updateReadmeIndex(allSuites: string[]): Promise<void> {
  const readmePath = join(__dirname, '../../README.md');
  const content = await readFile(readmePath, 'utf-8');

  const startMarker = '<!-- RESULTS -->';
  const endMarker = '<!-- /RESULTS -->';

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(
      '<!-- RESULTS --> and <!-- /RESULTS --> markers not found in README.md'
    );
  }

  let indexMarkdown = '';
  for (const suite of allSuites) {
    indexMarkdown += `- [${suite}](./results/${suite}.md)\n`;
  }

  const beforeMarker = content.substring(0, startIndex + startMarker.length);
  const afterMarker = content.substring(endIndex);
  const newContent = beforeMarker + '\n\n' + indexMarkdown + '\n' + afterMarker;

  await writeFile(readmePath, newContent, 'utf-8');
}

async function main() {
  const args = process.argv.slice(2);
  const allSuites = await getSuiteNames();
  const suitesToRun = args.length > 0 ? args : allSuites;

  console.log(`Running benchmarks for: ${suitesToRun.join(', ')}\n`);

  const results: BenchmarkResult[] = [];

  for (const suite of suitesToRun) {
    if (!allSuites.includes(suite)) {
      console.error(`✗ Suite "${suite}" not found, skipping`);
      continue;
    }

    console.log(`\n=== ${suite} ===`);
    for (const engine of ENGINES) {
      console.log(`Running on ${engine}...`);
      try {
        const output = await runBenchmark(engine, suite);
        results.push({suite, engine, output});
        console.log(`  ✓ ${engine} completed`);
      } catch (err) {
        console.error(`  ✗ ${engine} failed:`, err);
        results.push({
          suite,
          engine,
          output: `Error: ${err instanceof Error ? err.message : String(err)}`
        });
      }
    }

    // Write result file for this suite
    const suiteResults = results.filter((r) => r.suite === suite);
    await writeSuiteResult(suite, suiteResults);
  }

  console.log('\nUpdating README.md index...');
  await updateReadmeIndex(allSuites);

  console.log('✓ Done!');
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
