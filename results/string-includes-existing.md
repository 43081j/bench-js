# string-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 90.71 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 94.05 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 67.32 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 86.62 ns |
| indexOf (bun) | 0.42 ns | 0.16 ns | 0.19 ns | 8.65 ns | 45.28 ns |
| includes (bun) | 43.43 ns | 42.44 ns | 43.28 ns | 50.77 ns | 91.92 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (deno) | 0.0009 B | 0.0000 B | 94.53 B | 780.59 B |
| includes (deno) | 0.0009 B | 0.0000 B | 71.20 B | 775.67 B |
| indexOf (bun) | 0.0282 B | 0.0000 B | 32.00 B | 1.72 KB |
| includes (bun) | 0.0512 B | 0.0000 B | 64.00 B | 192.00 B |
| indexOf (node) | 0.0884 B | 0.0547 B | 80.13 B | 79.59 KB |
| includes (node) | 0.0887 B | 0.0879 B | 62.23 B | 79.83 KB |

