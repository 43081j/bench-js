# JS Benchmarks

This repository holds a collection of JavaScript benchmarks which are primarily
used to justify rules in developer tooling such as the
[@e18e/eslint-plugin](https://www.npmjs.com/package/@e18e/eslint-plugin) package.

<!-- BENCH -->

## array-concat-small

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 25.70 ns | 21.97 ns | 23.11 ns | 112.83 ns | 226.17 ns |
| arraySpread (node) | 36.51 ns | 34.55 ns | 35.46 ns | 58.38 ns | 158.51 ns |
| arraySpread (bun) | 38.56 ns | 28.83 ns | 48.73 ns | 110.00 ns | 144.14 ns |
| arrayConcat (node) | 70.89 ns | 59.22 ns | 61.44 ns | 227.36 ns | 327.18 ns |

### Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 0.0163 B | 0.0000 B | 12.00 B | 72.00 B |
| arrayConcat (bun) | 0.1490 B | 0.0000 B | 256.00 B | 976.00 B |
| arrayConcat (node) | 208.15 B | 47.67 B | 312.22 B | 483.99 KB |
| arraySpread (node) | 401.45 B | 295.56 B | 1.01 KB | 1.76 MB |

## array-concat

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 875.68 ns | 831.46 ns | 875.97 ns | 982.03 ns | 984.31 ns |
| arrayConcat (node) | 1.01 µs | 994.99 ns | 1.02 µs | 1.04 µs | 1.04 µs |
| arraySpread (bun) | 3.61 µs | 3.41 µs | 3.69 µs | 3.91 µs | 3.97 µs |
| arraySpread (node) | 4.04 µs | 3.80 µs | 3.85 µs | 4.05 µs | 11.12 µs |

### Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (node) | 4.67 B | 0.0020 B | 10.27 B | 14.00 B |
| arrayConcat (bun) | 4.71 B | 0.0000 B | 868.00 B | 928.00 B |
| arraySpread (bun) | 22.50 B | 0.0000 B | 1.00 KB | 1.05 KB |
| arraySpread (node) | 6.46 KB | 6.40 KB | 7.62 KB | 148.50 KB |

