# string-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 77.14 ns |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 80.44 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.10 ns | 63.67 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.10 ns | 102.65 ns |
| indexOf (bun) | 0.51 ns | 0.16 ns | 0.17 ns | 12.99 ns | 57.83 ns |
| includes (bun) | 60.02 ns | 58.89 ns | 60.85 ns | 68.48 ns | 112.72 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (deno) | 0.0008 B | 0.0000 B | 102.53 B | 761.86 B |
| includes (deno) | 0.0008 B | 0.0000 B | 70.52 B | 795.23 B |
| indexOf (bun) | 0.0260 B | 0.0000 B | 32.00 B | 1.53 KB |
| indexOf (node) | 0.0885 B | 0.0879 B | 56.13 B | 72.83 KB |
| includes (node) | 0.0889 B | 0.0879 B | 54.95 B | 73.78 KB |
| includes (bun) | 0.0931 B | 0.0000 B | 32.00 B | 256.00 B |

