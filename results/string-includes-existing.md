# string-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 74.55 ns |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 60.39 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 63.99 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 86.07 ns |
| indexOf (bun) | 0.41 ns | 0.16 ns | 0.17 ns | 8.65 ns | 45.54 ns |
| includes (bun) | 43.50 ns | 42.35 ns | 42.91 ns | 55.19 ns | 94.91 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (deno) | 0.0008 B | 0.0000 B | 72.20 B | 765.21 B |
| indexOf (deno) | 0.0009 B | 0.0000 B | 86.53 B | 796.32 B |
| indexOf (bun) | 0.0169 B | 0.0000 B | 32.00 B | 1.03 KB |
| includes (bun) | 0.0684 B | 0.0000 B | 32.00 B | 256.00 B |
| indexOf (node) | 0.0885 B | 0.0879 B | 49.66 B | 73.26 KB |
| includes (node) | 0.0889 B | 0.0879 B | 58.62 B | 73.75 KB |

