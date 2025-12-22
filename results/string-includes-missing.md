# string-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 77.06 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 94.17 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 63.25 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.09 ns | 103.88 ns |
| indexOf (bun) | 0.54 ns | 0.16 ns | 0.20 ns | 12.99 ns | 72.56 ns |
| includes (bun) | 60.35 ns | 59.04 ns | 60.89 ns | 73.93 ns | 124.14 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (deno) | 0.0008 B | 0.0000 B | 102.53 B | 731.77 B |
| includes (deno) | 0.0009 B | 0.0000 B | 76.61 B | 792.27 B |
| indexOf (bun) | 0.0226 B | 0.0000 B | 32.00 B | 1.31 KB |
| includes (bun) | 0.0701 B | 0.0000 B | 64.00 B | 192.00 B |
| indexOf (node) | 0.0884 B | 0.0879 B | 48.12 B | 79.89 KB |
| includes (node) | 0.0888 B | 0.0879 B | 80.19 B | 79.57 KB |

