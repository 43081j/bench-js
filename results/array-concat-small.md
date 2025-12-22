# array-concat-small

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 39.66 ns | 35.39 ns | 37.90 ns | 100.06 ns | 133.31 ns |
| arraySpread (node) | 49.43 ns | 45.96 ns | 49.26 ns | 75.69 ns | 314.92 ns |
| arraySpread (deno) | 49.64 ns | 45.02 ns | 48.52 ns | 88.06 ns | 305.51 ns |
| arraySpread (bun) | 63.85 ns | 45.15 ns | 70.18 ns | 143.71 ns | 182.73 ns |
| arrayConcat (deno) | 106.72 ns | 103.18 ns | 106.19 ns | 140.12 ns | 205.38 ns |
| arrayConcat (node) | 117.93 ns | 113.72 ns | 118.31 ns | 159.66 ns | 217.63 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (bun) | 0.0955 B | 0.0000 B | 224.00 B | 384.00 B |
| arraySpread (bun) | 0.2998 B | 0.0000 B | 192.00 B | 768.00 B |
| arrayConcat (deno) | 208.04 B | 51.63 B | 327.43 B | 318.96 KB |
| arrayConcat (node) | 208.15 B | 69.93 B | 306.45 B | 292.50 KB |
| arraySpread (node) | 401.79 B | 344.63 B | 1.00 KB | 1.29 MB |
| arraySpread (deno) | 402.63 B | 10.35 B | 1023.84 B | 1.26 MB |

