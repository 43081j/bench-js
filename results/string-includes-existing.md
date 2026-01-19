# string-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 58.54 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 89.31 ns |
| includes (bun) | 0.10 ns | 0.09 ns | 0.09 ns | 0.19 ns | 6.72 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 62.02 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 91.09 ns |
| indexOf (bun) | 0.18 ns | 0.16 ns | 0.17 ns | 0.28 ns | 12.39 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (deno) | 0.0009 B | 0.0000 B | 72.18 B | 734.82 B |
| indexOf (deno) | 0.0009 B | 0.0000 B | 94.53 B | 734.38 B |
| indexOf (bun) | 0.0154 B | 0.0000 B | 32.00 B | 1.03 KB |
| includes (bun) | 0.0234 B | 0.0000 B | 32.00 B | 1.63 KB |
| indexOf (node) | 0.0885 B | 0.0879 B | 64.13 B | 72.55 KB |
| includes (node) | 0.0889 B | 0.0879 B | 58.38 B | 71.86 KB |

