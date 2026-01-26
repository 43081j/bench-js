# string-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 73.56 ns |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 94.94 ns |
| includes (bun) | 0.10 ns | 0.09 ns | 0.09 ns | 0.19 ns | 11.46 ns |
| includes (deno) | 0.10 ns | 0.09 ns | 0.10 ns | 0.10 ns | 60.77 ns |
| indexOf (deno) | 0.10 ns | 0.09 ns | 0.09 ns | 0.10 ns | 88.63 ns |
| indexOf (bun) | 0.18 ns | 0.16 ns | 0.16 ns | 0.39 ns | 13.54 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (deno) | 0.0009 B | 0.0000 B | 94.53 B | 779.18 B |
| includes (deno) | 0.0009 B | 0.0000 B | 80.37 B | 777.54 B |
| indexOf (bun) | 0.0175 B | 0.0000 B | 32.00 B | 1.16 KB |
| includes (bun) | 0.0182 B | 0.0000 B | 32.00 B | 1.25 KB |
| indexOf (node) | 0.0885 B | 0.0879 B | 67.05 B | 80.68 KB |
| includes (node) | 0.0887 B | 0.0879 B | 58.38 B | 80.25 KB |

