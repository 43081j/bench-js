# array-from

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 545.74 ns | 503.38 ns | 559.71 ns | 639.41 ns | 647.20 ns |
| arrayFrom (deno) | 572.13 ns | 521.17 ns | 588.47 ns | 639.34 ns | 654.73 ns |
| arraySpread (node) | 599.93 ns | 559.19 ns | 615.07 ns | 642.59 ns | 656.56 ns |
| arrayFrom (node) | 629.54 ns | 572.45 ns | 644.56 ns | 689.37 ns | 708.35 ns |
| arrayFrom (bun) | 895.02 ns | 799.08 ns | 919.91 ns | 1.01 µs | 1.05 µs |
| arraySpread (bun) | 1.24 µs | 1.16 µs | 1.28 µs | 1.34 µs | 1.38 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (bun) | 5.16 B | 0.0000 B | 896.00 B | 960.00 B |
| arraySpread (bun) | 6.50 B | 0.0000 B | 64.00 B | 864.00 B |
| arrayFrom (deno) | 16.98 B | 0.0000 B | 245.44 B | 254.75 B |
| arraySpread (deno) | 1.65 KB | 0.0488 B | 8.00 KB | 8.23 KB |
| arrayFrom (node) | 8.00 KB | 7.75 KB | 8.14 KB | 1.07 MB |
| arraySpread (node) | 8.00 KB | 7.93 KB | 8.00 KB | 1.13 MB |

