import {readdir} from 'node:fs/promises';
import {join, basename} from 'node:path';
import {fileURLToPath} from 'node:url';
import {bench, run} from 'mitata';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function getSuiteFiles(suiteName?: string): Promise<string[]> {
  const benchmarksDir = join(__dirname, 'benchmarks');
  const files = await readdir(benchmarksDir);

  const tsFiles = files.filter((f) => f.endsWith('.ts'));

  if (suiteName) {
    return tsFiles.filter((f) => {
      const name = basename(f, '.ts');
      return name === suiteName;
    });
  }

  return tsFiles;
}

function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

async function runSuite(suiteFile: string): Promise<void> {
  const suitePath = join(__dirname, 'benchmarks', suiteFile);
  const module = await import(suitePath);

  const functionExports = Object.entries(module).filter(
    ([key, value]) => key !== 'default' && isFunction(value)
  );

  if (functionExports.length === 0) {
    return;
  }

  for (const [name, fn] of functionExports) {
    bench(name, fn as () => void);
  }

  await run({
    format: 'json'
  });
}

async function main() {
  const args = process.argv.slice(2);
  const suiteName = args[0];

  const suiteFiles = await getSuiteFiles(suiteName);

  if (suiteFiles.length === 0) {
    console.error(
      `No suites found${suiteName ? ` matching "${suiteName}"` : ''}`
    );
    process.exit(1);
  }

  for (const suiteFile of suiteFiles) {
    await runSuite(suiteFile);
  }
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
