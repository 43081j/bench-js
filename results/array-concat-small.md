# array-concat-small

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 40.80 ns | 35.23 ns | 38.23 ns | 95.05 ns | 150.76 ns |
| arraySpread (node) | 47.66 ns | 44.84 ns | 47.61 ns | 69.40 ns | 313.06 ns |
| arraySpread (deno) | 53.98 ns | 49.36 ns | 52.62 ns | 96.44 ns | 299.52 ns |
| arraySpread (bun) | 62.91 ns | 44.51 ns | 68.83 ns | 135.82 ns | 226.86 ns |
| arrayConcat (deno) | 113.79 ns | 106.40 ns | 109.60 ns | 199.29 ns | 206.20 ns |
| arrayConcat (node) | 118.32 ns | 113.34 ns | 116.71 ns | 210.77 ns | 218.98 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (bun) | 0.1389 B | 0.0000 B | 224.00 B | 544.00 B |
| arraySpread (bun) | 0.3075 B | 0.0000 B | 288.00 B | 800.00 B |
| arrayConcat (deno) | 208.04 B | 2.15 B | 327.43 B | 299.06 KB |
| arrayConcat (node) | 208.15 B | 77.93 B | 290.45 B | 291.49 KB |
| arraySpread (node) | 401.62 B | 26.46 B | 1.00 KB | 1.34 MB |
| arraySpread (deno) | 402.10 B | 178.68 B | 1.05 KB | 1.16 MB |

