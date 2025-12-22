#!/usr/bin/env node

import {spawn} from 'node:child_process';
import {readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join, basename} from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

type Engine = 'node' | 'bun' | 'deno' | 'chrome';

interface EngineConfig {
  command: string;
  args: string[];
}

interface SuiteResult {
  suite: string;
  output: string;
}

function getEngineConfig(engine: Engine, cliPath: string): EngineConfig {
  switch (engine) {
    case 'node':
      return {
        command: 'node',
        args: ['--expose-gc', cliPath]
      };
    case 'bun':
      return {
        command: 'bun',
        args: ['--expose-gc', cliPath]
      };
    case 'deno':
      throw new Error('Deno engine not yet implemented');
    case 'chrome':
      throw new Error('Chrome engine not yet implemented');
    default:
      throw new Error(`Unknown engine: ${engine}`);
  }
}

async function getSuiteNames(): Promise<string[]> {
  const benchmarksDir = join(__dirname, 'benchmarks');
  const files = await readdir(benchmarksDir);

  return files.filter((f) => f.endsWith('.ts')).map((f) => basename(f, '.ts'));
}

async function runBenchmark(
  engine: Engine,
  suiteName: string
): Promise<string> {
  const cliPath = join(__dirname, 'run-suite.ts');
  const config = getEngineConfig(engine, cliPath);
  const args = [...config.args, suiteName];

  return new Promise((resolve, reject) => {
    const child = spawn(config.command, args, {
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
        resolve(stdout);
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}

function formatAsMarkdown(engine: Engine, results: SuiteResult[]): string {
  let markdown = `# Benchmark Results - ${engine}\n\n`;

  for (const result of results) {
    markdown += `## Suite: ${result.suite}\n\n`;
    markdown += '```\n';
    markdown += result.output;
    markdown += '```\n\n';
  }

  return markdown;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: run-engine <engine> [suite-name]');
    console.error('Engines: node, bun, deno (TODO), chrome (TODO)');
    process.exit(1);
  }

  const engine = args[0] as Engine;
  const suiteName = args[1];

  if (!['node', 'bun', 'deno', 'chrome'].includes(engine)) {
    console.error(`Invalid engine: ${engine}`);
    console.error('Valid engines: node, bun, deno (TODO), chrome (TODO)');
    process.exit(1);
  }

  try {
    let suites: string[];

    if (suiteName) {
      suites = [suiteName];
    } else {
      suites = await getSuiteNames();
    }

    const results: SuiteResult[] = [];

    for (const suite of suites) {
      const output = await runBenchmark(engine, suite);
      results.push({suite, output});
    }

    const markdown = formatAsMarkdown(engine, results);
    console.log(markdown);
  } catch (err) {
    console.error('Error running benchmark:', err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
