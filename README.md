# JS Benchmarks

This repository holds a collection of JavaScript benchmarks which are primarily
used to justify rules in developer tooling such as the
[@e18e/eslint-plugin](https://www.npmjs.com/package/@e18e/eslint-plugin) package.

<!-- BENCH -->

## array-concat-small

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 45.06 ns | 35.75 ns | 40.83 ns | 111.75 ns | 192.36 ns |
| arraySpread (node) | 47.64 ns | 44.77 ns | 46.86 ns | 70.40 ns | 314.19 ns |
| arraySpread (deno) | 48.02 ns | 44.62 ns | 47.41 ns | 65.59 ns | 304.22 ns |
| arraySpread (bun) | 85.61 ns | 45.01 ns | 120.94 ns | 212.00 ns | 226.27 ns |
| arrayConcat (deno) | 104.86 ns | 101.57 ns | 104.39 ns | 131.10 ns | 207.15 ns |
| arrayConcat (node) | 116.40 ns | 113.87 ns | 116.77 ns | 148.60 ns | 171.60 ns |

### Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (bun) | 0.2157 B | 0.0000 B | 256.00 B | 768.00 B |
| arraySpread (bun) | 0.4803 B | 0.0000 B | 352.00 B | 928.00 B |
| arrayConcat (deno) | 208.04 B | 38.21 B | 379.22 B | 324.65 KB |
| arrayConcat (node) | 208.15 B | 77.91 B | 290.45 B | 296.36 KB |
| arraySpread (node) | 401.74 B | 400.22 B | 1.00 KB | 1.34 MB |
| arraySpread (deno) | 402.22 B | 2.32 B | 1.03 KB | 1.30 MB |

## array-concat

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (deno) | 1.14 µs | 1.11 µs | 1.15 µs | 1.25 µs | 1.35 µs |
| arrayConcat (bun) | 1.19 µs | 1.02 µs | 1.23 µs | 1.64 µs | 1.69 µs |
| arrayConcat (node) | 1.31 µs | 1.27 µs | 1.33 µs | 1.40 µs | 1.42 µs |
| arraySpread (bun) | 4.73 µs | 4.41 µs | 4.87 µs | 5.29 µs | 5.47 µs |
| arraySpread (node) | 4.88 µs | 4.43 µs | 4.57 µs | 5.07 µs | 13.89 µs |
| arraySpread (deno) | 4.89 µs | 4.45 µs | 4.58 µs | 5.20 µs | 13.77 µs |

### Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.64 B | 0.0000 B | 201.95 B | 215.97 B |
| arrayConcat (node) | 6.64 B | 3.72 B | 9.55 B | 13.27 B |
| arrayConcat (bun) | 7.77 B | 0.0000 B | 1.00 KB | 1.06 KB |
| arraySpread (bun) | 61.87 B | 0.0000 B | 1.00 KB | 1.81 KB |
| arraySpread (node) | 6.46 KB | 6.40 KB | 7.39 KB | 116.24 KB |
| arraySpread (deno) | 6.50 KB | 5.93 KB | 7.52 KB | 45.51 KB |

## array-from-set

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (node) | 1.59 µs | 1.56 µs | 1.61 µs | 1.64 µs | 1.64 µs |
| arrayFrom (node) | 1.59 µs | 1.57 µs | 1.60 µs | 1.63 µs | 1.66 µs |
| arraySpread (deno) | 1.59 µs | 1.58 µs | 1.60 µs | 1.62 µs | 1.62 µs |
| arrayFrom (deno) | 1.60 µs | 1.58 µs | 1.61 µs | 1.64 µs | 1.65 µs |
| arrayFrom (bun) | 12.02 µs | 11.84 µs | 12.15 µs | 12.24 µs | 12.27 µs |
| arraySpread (bun) | 12.74 µs | 12.56 µs | 12.74 µs | 12.97 µs | 12.98 µs |

### Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (bun) | 41.50 B | 0.0000 B | 210.00 B | 498.00 B |
| arrayFrom (deno) | 49.71 B | 0.3340 B | 189.51 B | 198.83 B |
| arraySpread (bun) | 93.00 B | 0.0000 B | 671.00 B | 1023.00 B |
| arraySpread (deno) | 114.74 B | 0.0000 B | 8.00 KB | 8.18 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 439.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 439.96 KB |

## array-from

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 441.55 ns | 400.01 ns | 455.30 ns | 524.93 ns | 541.06 ns |
| arrayFrom (deno) | 452.66 ns | 411.97 ns | 462.43 ns | 514.49 ns | 541.65 ns |
| arrayFrom (node) | 491.26 ns | 460.19 ns | 501.19 ns | 537.53 ns | 575.02 ns |
| arraySpread (node) | 492.57 ns | 461.60 ns | 502.93 ns | 538.07 ns | 552.32 ns |
| arrayFrom (bun) | 803.59 ns | 682.71 ns | 832.18 ns | 1.11 µs | 1.23 µs |
| arraySpread (bun) | 1.16 µs | 1.05 µs | 1.19 µs | 1.27 µs | 1.34 µs |

### Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 6.36 B | 0.0000 B | 64.00 B | 928.00 B |
| arrayFrom (bun) | 18.33 B | 0.0000 B | 1.44 KB | 3.71 KB |
| arrayFrom (deno) | 60.41 B | 0.0000 B | 149.05 B | 422.84 B |
| arraySpread (deno) | 449.66 B | 0.0000 B | 8.00 KB | 8.34 KB |
| arraySpread (node) | 8.00 KB | 7.93 KB | 8.00 KB | 1.37 MB |
| arrayFrom (node) | 8.00 KB | 8.00 KB | 8.10 KB | 1.38 MB |

