import {spawn} from 'node:child_process';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join, basename} from 'node:path';
import {stripVTControlCharacters} from 'node:util';
import type {trial, ctx} from 'mitata';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

type Engine = 'node' | 'bun';

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
  const command = engine === 'node' ? 'node' : 'bun';
  const args =
    engine === 'node'
      ? ['--expose-gc', cliPath, suiteName]
      : ['--expose-gc', cliPath, suiteName];

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

function formatResultsAsMarkdown(
  suites: string[],
  results: BenchmarkResult[]
): string {
  const engines: Engine[] = ['node', 'bun'];
  let markdown = '';

  for (const suite of suites) {
    markdown += `## ${suite}\n\n`;

    const rows: BenchmarkRow[] = [];

    for (const engine of engines) {
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

    // Generate timing table
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

    // Generate memory table if heap data is available
    const rowsWithHeap = rows.filter(
      (row) => row.benchmark.runs[0]?.stats?.heap
    );
    if (rowsWithHeap.length > 0) {
      // Sort by avg heap usage ascending
      rowsWithHeap.sort((a, b) => {
        const aHeap = a.benchmark.runs[0]?.stats?.heap;
        const bHeap = b.benchmark.runs[0]?.stats?.heap;
        return (aHeap?.avg ?? 0) - (bHeap?.avg ?? 0);
      });

      markdown += '### Memory\n\n';
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
  }

  return markdown;
}

async function updateReadme(benchmarkResults: string): Promise<void> {
  const readmePath = join(__dirname, '../../README.md');
  const content = await readFile(readmePath, 'utf-8');

  const markerIndex = content.indexOf('<!-- BENCH -->');
  if (markerIndex === -1) {
    throw new Error('<!-- BENCH --> marker not found in README.md');
  }

  const beforeMarker = content.substring(
    0,
    markerIndex + '<!-- BENCH -->'.length
  );
  const newContent = beforeMarker + '\n\n' + benchmarkResults;

  await writeFile(readmePath, newContent, 'utf-8');
}

async function main() {
  console.log('Getting suite names...');
  const suites = await getSuiteNames();
  console.log(`Found ${suites.length} suites: ${suites.join(', ')}\n`);

  const engines: Engine[] = ['node', 'bun'];
  const results: BenchmarkResult[] = [];

  for (const suite of suites) {
    for (const engine of engines) {
      console.log(`Running ${suite} on ${engine}...`);
      try {
        const output = await runBenchmark(engine, suite);
        results.push({suite, engine, output});
        console.log(`✓ ${suite} on ${engine} completed\n`);
      } catch (err) {
        console.error(`✗ ${suite} on ${engine} failed:`, err);
        results.push({
          suite,
          engine,
          output: `Error: ${err instanceof Error ? err.message : String(err)}`
        });
      }
    }
  }

  console.log('Formatting results...');
  const markdown = formatResultsAsMarkdown(suites, results);

  console.log('Updating README.md...');
  await updateReadme(markdown);

  console.log('✓ README.md updated successfully!');
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
