# array-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 1.25 ns | 0.09 ns | 0.09 ns | 0.10 ns | 323.73 ns |
| includes (deno) | 94.69 ns | 93.75 ns | 95.46 ns | 100.80 ns | 123.99 ns |
| indexOf (deno) | 95.45 ns | 93.83 ns | 95.57 ns | 107.74 ns | 224.50 ns |
| indexOf (bun) | 165.15 ns | 161.86 ns | 163.89 ns | 198.91 ns | 324.43 ns |
| indexOf (node) | 404.38 ns | 402.26 ns | 404.39 ns | 415.89 ns | 428.38 ns |
| includes (node) | 408.54 ns | 401.35 ns | 403.73 ns | 588.72 ns | 693.54 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0194 B | 0.0000 B | 32.00 B | 928.00 B |
| indexOf (bun) | 0.0626 B | 0.0000 B | 32.00 B | 64.00 B |
| indexOf (deno) | 0.3658 B | 0.0000 B | 190.20 B | 656.95 B |
| includes (deno) | 0.3660 B | 0.0000 B | 102.53 B | 661.68 B |
| includes (node) | 0.6032 B | 0.0879 B | 149.95 B | 252.13 B |
| indexOf (node) | 0.7040 B | 0.0879 B | 138.89 B | 298.49 B |

