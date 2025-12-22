# array-from

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 511.94 ns | 489.94 ns | 516.94 ns | 577.81 ns | 587.91 ns |
| arrayFrom (deno) | 514.96 ns | 494.28 ns | 518.87 ns | 577.78 ns | 632.29 ns |
| arraySpread (node) | 569.75 ns | 538.43 ns | 581.76 ns | 630.74 ns | 636.00 ns |
| arrayFrom (node) | 582.44 ns | 553.55 ns | 589.81 ns | 658.17 ns | 680.94 ns |
| arrayFrom (bun) | 741.48 ns | 672.53 ns | 749.08 ns | 927.42 ns | 1.54 µs |
| arraySpread (bun) | 1.07 µs | 1.01 µs | 1.08 µs | 1.13 µs | 1.28 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 9.17 B | 0.0000 B | 32.00 B | 1.41 KB |
| arrayFrom (bun) | 16.21 B | 0.0000 B | 1.69 KB | 3.56 KB |
| arrayFrom (deno) | 51.81 B | 0.3340 B | 197.84 B | 207.23 B |
| arraySpread (deno) | 380.85 B | 0.0000 B | 8.00 KB | 8.18 KB |
| arraySpread (node) | 8.00 KB | 7.86 KB | 8.00 KB | 1.19 MB |
| arrayFrom (node) | 8.00 KB | 8.00 KB | 8.14 KB | 1.16 MB |

