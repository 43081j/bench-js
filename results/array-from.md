# array-from

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 432.61 ns | 411.28 ns | 436.27 ns | 493.48 ns | 523.05 ns |
| arrayFrom (deno) | 437.10 ns | 401.10 ns | 442.90 ns | 505.08 ns | 564.44 ns |
| arraySpread (node) | 481.06 ns | 453.94 ns | 492.41 ns | 530.75 ns | 548.75 ns |
| arrayFrom (node) | 482.01 ns | 460.24 ns | 489.48 ns | 532.27 ns | 552.91 ns |
| arrayFrom (bun) | 808.07 ns | 737.52 ns | 824.14 ns | 1.27 µs | 1.54 µs |
| arraySpread (bun) | 1.16 µs | 1.09 µs | 1.19 µs | 1.27 µs | 1.30 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 0.4476 B | 0.0000 B | 32.00 B | 64.00 B |
| arrayFrom (deno) | 9.16 B | 0.0000 B | 159.06 B | 339.08 B |
| arrayFrom (bun) | 42.86 B | 0.0000 B | 5.59 KB | 8.45 KB |
| arraySpread (deno) | 1.19 KB | 0.1016 B | 8.00 KB | 8.34 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 1.41 MB |
| arrayFrom (node) | 8.00 KB | 7.91 KB | 8.18 KB | 1.40 MB |

