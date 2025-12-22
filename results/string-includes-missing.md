# string-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 60.11 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 98.56 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 67.03 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.10 ns | 65.12 ns |
| indexOf (bun) | 0.50 ns | 0.16 ns | 0.17 ns | 12.99 ns | 59.02 ns |
| includes (bun) | 60.06 ns | 59.11 ns | 61.01 ns | 66.14 ns | 113.49 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (deno) | 0.0008 B | 0.0000 B | 76.61 B | 746.91 B |
| indexOf (deno) | 0.0009 B | 0.0000 B | 70.52 B | 790.02 B |
| indexOf (bun) | 0.0222 B | 0.0000 B | 32.00 B | 1.31 KB |
| includes (bun) | 0.0349 B | 0.0000 B | 32.00 B | 96.00 B |
| indexOf (node) | 0.0885 B | 0.0879 B | 56.13 B | 79.53 KB |
| includes (node) | 0.0888 B | 0.0879 B | 58.38 B | 79.12 KB |

