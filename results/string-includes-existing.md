# string-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 89.59 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 91.58 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 64.33 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 87.01 ns |
| indexOf (bun) | 0.41 ns | 0.16 ns | 0.19 ns | 8.65 ns | 42.05 ns |
| includes (bun) | 43.26 ns | 42.50 ns | 42.91 ns | 50.12 ns | 91.12 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (deno) | 0.0009 B | 0.0000 B | 94.53 B | 775.96 B |
| indexOf (deno) | 0.0009 B | 0.0000 B | 70.52 B | 789.19 B |
| indexOf (bun) | 0.0138 B | 0.0000 B | 32.00 B | 864.00 B |
| includes (bun) | 0.0255 B | 0.0000 B | 32.00 B | 96.00 B |
| indexOf (node) | 0.0884 B | 0.0879 B | 72.12 B | 80.31 KB |
| includes (node) | 0.0887 B | 0.0879 B | 58.38 B | 79.51 KB |

