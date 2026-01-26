# array-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 1.21 ns | 0.09 ns | 0.09 ns | 0.09 ns | 297.63 ns |
| includes (deno) | 93.83 ns | 92.83 ns | 94.59 ns | 101.41 ns | 121.69 ns |
| indexOf (deno) | 94.65 ns | 92.91 ns | 94.68 ns | 110.80 ns | 226.17 ns |
| indexOf (bun) | 165.08 ns | 161.86 ns | 163.95 ns | 196.80 ns | 223.14 ns |
| includes (node) | 404.20 ns | 401.37 ns | 403.69 ns | 422.33 ns | 447.36 ns |
| indexOf (node) | 404.58 ns | 402.29 ns | 404.51 ns | 418.79 ns | 428.04 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (bun) | 0.0000 B | 0.0000 B | 0.0000 B | 0.0000 B |
| includes (bun) | 0.0252 B | 0.0000 B | 32.00 B | 1.19 KB |
| indexOf (deno) | 0.2540 B | 0.0000 B | 135.37 B | 460.05 B |
| includes (deno) | 0.3734 B | 0.0000 B | 110.53 B | 681.51 B |
| indexOf (node) | 0.7229 B | 0.0879 B | 149.58 B | 306.49 B |
| includes (node) | 0.8013 B | 0.0879 B | 138.72 B | 338.93 B |

