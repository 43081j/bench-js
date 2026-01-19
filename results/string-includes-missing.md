# string-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 72.49 ns |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 62.65 ns |
| includes (bun) | 0.09 ns | 0.09 ns | 0.09 ns | 0.10 ns | 7.68 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.10 ns | 60.98 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.10 ns | 102.63 ns |
| indexOf (bun) | 0.18 ns | 0.16 ns | 0.16 ns | 0.28 ns | 12.68 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (deno) | 0.0009 B | 0.0000 B | 78.53 B | 744.58 B |
| indexOf (deno) | 0.0009 B | 0.0000 B | 78.53 B | 757.51 B |
| indexOf (bun) | 0.0149 B | 0.0000 B | 32.00 B | 1.00 KB |
| includes (bun) | 0.0158 B | 0.0000 B | 32.00 B | 1.09 KB |
| indexOf (node) | 0.0885 B | 0.0879 B | 56.13 B | 73.16 KB |
| includes (node) | 0.0889 B | 0.0879 B | 64.19 B | 73.25 KB |

