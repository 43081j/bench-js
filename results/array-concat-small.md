# array-concat-small

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 40.02 ns | 35.20 ns | 37.14 ns | 100.05 ns | 147.10 ns |
| arraySpread (node) | 50.66 ns | 44.87 ns | 49.30 ns | 95.50 ns | 176.52 ns |
| arraySpread (deno) | 51.38 ns | 46.75 ns | 50.78 ns | 70.61 ns | 304.74 ns |
| arraySpread (bun) | 63.73 ns | 44.75 ns | 69.61 ns | 138.35 ns | 158.30 ns |
| arrayConcat (deno) | 104.36 ns | 101.48 ns | 104.60 ns | 127.19 ns | 142.90 ns |
| arrayConcat (node) | 121.35 ns | 114.03 ns | 117.31 ns | 217.15 ns | 220.09 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (bun) | 0.1925 B | 0.0000 B | 256.00 B | 768.00 B |
| arraySpread (bun) | 0.3740 B | 0.0000 B | 288.00 B | 960.00 B |
| arrayConcat (deno) | 208.04 B | 12.17 B | 311.43 B | 326.49 KB |
| arrayConcat (node) | 208.15 B | 71.93 B | 306.45 B | 284.18 KB |
| arraySpread (deno) | 402.72 B | 2.32 B | 1.03 KB | 1.22 MB |
| arraySpread (node) | 402.94 B | 400.22 B | 976.06 B | 1.27 MB |

