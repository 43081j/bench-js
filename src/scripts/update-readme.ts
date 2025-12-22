#!/usr/bin/env node

import {spawn} from 'node:child_process';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join, basename} from 'node:path';
import {stripVTControlCharacters} from 'node:util';

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

function formatResultsAsMarkdown(
  suites: string[],
  results: BenchmarkResult[]
): string {
  const engines: Engine[] = ['node', 'bun'];
  let markdown = '';

  for (const suite of suites) {
    markdown += `## ${suite}\n\n`;

    markdown += '| Engine | Results |\n';
    markdown += '|--------|----------|\n';

    for (const engine of engines) {
      const result = results.find(
        (r) => r.suite === suite && r.engine === engine
      );

      if (result) {
        const cleanOutput = stripVTControlCharacters(result.output);
        const escapedOutput = cleanOutput
          .replace(/\|/g, '\\|')
          .replace(/\n/g, '<br>');
        markdown += `| ${engine} | <pre>${escapedOutput}</pre> |\n`;
      } else {
        markdown += `| ${engine} | _N/A_ |\n`;
      }
    }

    markdown += '\n';
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
