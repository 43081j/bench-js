# string-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 90.47 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 71.12 ns |
| indexOf (deno) | 0.10 ns | 0.10 ns | 0.10 ns | 0.10 ns | 86.83 ns |
| includes (deno) | 0.10 ns | 0.10 ns | 0.10 ns | 0.10 ns | 87.48 ns |
| indexOf (bun) | 0.41 ns | 0.16 ns | 0.17 ns | 8.65 ns | 45.56 ns |
| includes (bun) | 43.26 ns | 42.36 ns | 42.86 ns | 51.19 ns | 93.22 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (deno) | 0.0009 B | 0.0000 B | 86.53 B | 741.46 B |
| indexOf (deno) | 0.0009 B | 0.0000 B | 94.53 B | 767.39 B |
| indexOf (bun) | 0.0164 B | 0.0000 B | 32.00 B | 1.00 KB |
| includes (bun) | 0.0255 B | 0.0000 B | 32.00 B | 96.00 B |
| indexOf (node) | 0.0885 B | 0.0879 B | 56.13 B | 79.94 KB |
| includes (node) | 0.0888 B | 0.0879 B | 48.19 B | 79.41 KB |

