# JS Benchmarks

This repository holds a collection of JavaScript benchmarks which are primarily
used to justify rules in developer tooling such as the
[@e18e/eslint-plugin](https://www.npmjs.com/package/@e18e/eslint-plugin) package.

<!-- BENCH -->

## array-concat-small

| benchmark   |              avg |         min |         p75 |         p99 |         max |
| ----------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| arrayConcat (node) | ` 60.65 ns/iter` | ` 59.33 ns` | ` 60.31 ns` | ` 79.65 ns` | ` 95.75 ns` |
| arraySpread (node) | ` 36.09 ns/iter` | ` 34.51 ns` | ` 35.36 ns` | ` 53.91 ns` | `138.64 ns` |
| arrayConcat (bun) | ` 25.30 ns/iter` | ` 23.42 ns` | ` 24.09 ns` | ` 85.98 ns` | `108.21 ns` |
| arraySpread (bun) | ` 38.92 ns/iter` | ` 28.81 ns` | ` 49.75 ns` | `107.77 ns` | `133.93 ns` |

## array-concat

| benchmark   |              avg |         min |         p75 |         p99 |         max |
| ----------- | ---------------- | ----------- | ----------- | ----------- | ----------- |
| arrayConcat (node) | `  1.00 µs/iter` | `992.68 ns` | `  1.01 µs` | `  1.02 µs` | `  1.03 µs` |
| arraySpread (node) | `  4.05 µs/iter` | `  3.80 µs` | `  3.86 µs` | `  4.05 µs` | ` 11.14 µs` |
| arrayConcat (bun) | `868.11 ns/iter` | `814.97 ns` | `868.23 ns` | `968.69 ns` | `976.32 ns` |
| arraySpread (bun) | `  3.54 µs/iter` | `  3.44 µs` | `  3.58 µs` | `  3.75 µs` | `  3.76 µs` |

