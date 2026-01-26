# string-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 60.01 ns |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.11 ns | 98.73 ns |
| includes (bun) | 0.09 ns | 0.09 ns | 0.09 ns | 0.11 ns | 9.68 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.10 ns | 0.10 ns | 67.17 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.10 ns | 0.10 ns | 105.76 ns |
| indexOf (bun) | 0.18 ns | 0.16 ns | 0.17 ns | 0.32 ns | 13.94 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (deno) | 0.0010 B | 0.0000 B | 78.53 B | 802.86 B |
| includes (deno) | 0.0011 B | 0.0000 B | 179.07 B | 868.54 B |
| indexOf (bun) | 0.0171 B | 0.0000 B | 32.00 B | 1.13 KB |
| includes (bun) | 0.0231 B | 0.0000 B | 32.00 B | 1.59 KB |
| indexOf (node) | 0.0884 B | 0.0879 B | 64.13 B | 78.16 KB |
| includes (node) | 0.0888 B | 0.0879 B | 64.19 B | 79.04 KB |

