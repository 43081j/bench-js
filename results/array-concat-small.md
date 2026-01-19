# array-concat-small

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 38.17 ns | 33.83 ns | 35.07 ns | 99.06 ns | 167.95 ns |
| arraySpread (node) | 47.71 ns | 45.06 ns | 47.10 ns | 69.74 ns | 161.31 ns |
| arraySpread (deno) | 50.75 ns | 46.29 ns | 49.64 ns | 90.45 ns | 308.12 ns |
| arraySpread (bun) | 69.36 ns | 48.58 ns | 75.19 ns | 144.93 ns | 163.90 ns |
| arrayConcat (deno) | 106.28 ns | 102.38 ns | 105.65 ns | 149.55 ns | 203.62 ns |
| arrayConcat (node) | 116.47 ns | 113.71 ns | 116.50 ns | 141.48 ns | 221.55 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 0.2835 B | 0.0000 B | 128.00 B | 672.00 B |
| arrayConcat (bun) | 1.30 B | 0.0000 B | 256.00 B | 5.31 KB |
| arrayConcat (deno) | 208.07 B | 63.66 B | 327.43 B | 320.23 KB |
| arrayConcat (node) | 208.15 B | 66.02 B | 306.45 B | 296.17 KB |
| arraySpread (node) | 401.94 B | 26.43 B | 986.91 B | 1.34 MB |
| arraySpread (deno) | 402.30 B | 10.35 B | 1.03 KB | 1.23 MB |

