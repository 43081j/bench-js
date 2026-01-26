# array-concat-small

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 38.53 ns | 33.86 ns | 35.34 ns | 106.04 ns | 168.90 ns |
| arraySpread (node) | 48.46 ns | 44.71 ns | 47.98 ns | 85.21 ns | 312.51 ns |
| arraySpread (deno) | 49.08 ns | 45.65 ns | 48.64 ns | 69.12 ns | 185.10 ns |
| arraySpread (bun) | 68.27 ns | 48.50 ns | 74.82 ns | 142.24 ns | 157.69 ns |
| arrayConcat (deno) | 107.48 ns | 102.39 ns | 106.80 ns | 196.84 ns | 198.86 ns |
| arrayConcat (node) | 121.97 ns | 116.81 ns | 120.25 ns | 216.08 ns | 221.20 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 0.2526 B | 0.0000 B | 64.00 B | 608.00 B |
| arrayConcat (bun) | 1.33 B | 0.0000 B | 256.00 B | 5.38 KB |
| arrayConcat (deno) | 208.10 B | 30.17 B | 318.57 B | 316.63 KB |
| arrayConcat (node) | 208.15 B | 6.41 B | 306.45 B | 282.96 KB |
| arraySpread (node) | 401.68 B | 400.22 B | 1.00 KB | 1.32 MB |
| arraySpread (deno) | 403.70 B | 130.67 B | 983.83 B | 1.28 MB |

