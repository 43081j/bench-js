# array-concat-small

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 39.68 ns | 35.02 ns | 36.70 ns | 100.94 ns | 136.84 ns |
| arraySpread (node) | 48.96 ns | 45.03 ns | 48.60 ns | 87.76 ns | 163.01 ns |
| arraySpread (deno) | 53.10 ns | 48.84 ns | 52.04 ns | 91.71 ns | 181.99 ns |
| arraySpread (bun) | 63.27 ns | 44.73 ns | 69.18 ns | 136.28 ns | 155.74 ns |
| arrayConcat (deno) | 106.44 ns | 102.47 ns | 105.86 ns | 147.34 ns | 205.58 ns |
| arrayConcat (node) | 118.56 ns | 114.54 ns | 118.98 ns | 161.30 ns | 218.85 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (bun) | 0.1749 B | 0.0000 B | 256.00 B | 704.00 B |
| arraySpread (bun) | 0.3832 B | 0.0000 B | 256.00 B | 992.00 B |
| arrayConcat (deno) | 208.05 B | 4.16 B | 326.57 B | 319.80 KB |
| arrayConcat (node) | 208.23 B | 10.39 B | 307.59 B | 290.99 KB |
| arraySpread (node) | 402.74 B | 26.46 B | 977.88 B | 1.31 MB |
| arraySpread (deno) | 403.26 B | 400.14 B | 1000.65 B | 1.18 MB |

