# array-from

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayFrom (deno) | 533.77 ns | 500.51 ns | 541.31 ns | 648.98 ns | 674.28 ns |
| arraySpread (deno) | 559.15 ns | 505.30 ns | 564.53 ns | 984.29 ns | 1.12 µs |
| arraySpread (node) | 585.50 ns | 544.47 ns | 598.24 ns | 648.35 ns | 650.44 ns |
| arrayFrom (node) | 599.44 ns | 550.42 ns | 611.47 ns | 700.56 ns | 706.05 ns |
| arrayFrom (bun) | 772.79 ns | 699.04 ns | 783.68 ns | 1.09 µs | 1.31 µs |
| arraySpread (bun) | 1.11 µs | 1.02 µs | 1.13 µs | 1.24 µs | 1.33 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 15.46 B | 0.0000 B | 864.00 B | 2.22 KB |
| arrayFrom (bun) | 17.19 B | 0.0000 B | 1.63 KB | 3.63 KB |
| arrayFrom (deno) | 17.62 B | 0.0000 B | 146.05 B | 229.04 B |
| arraySpread (deno) | 349.50 B | 0.0000 B | 8.00 KB | 8.19 KB |
| arraySpread (node) | 8.00 KB | 7.85 KB | 8.00 KB | 1.16 MB |
| arrayFrom (node) | 8.00 KB | 8.00 KB | 8.14 KB | 1.13 MB |

