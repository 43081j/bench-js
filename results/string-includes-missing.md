# string-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 68.76 ns |
| indexOf (node) | 0.09 ns | 0.09 ns | 0.09 ns | 0.09 ns | 99.30 ns |
| indexOf (deno) | 0.10 ns | 0.10 ns | 0.10 ns | 0.10 ns | 62.48 ns |
| includes (deno) | 0.10 ns | 0.10 ns | 0.10 ns | 0.10 ns | 63.83 ns |
| indexOf (bun) | 0.51 ns | 0.16 ns | 0.17 ns | 12.99 ns | 60.76 ns |
| includes (bun) | 60.40 ns | 59.04 ns | 60.88 ns | 79.03 ns | 128.06 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (deno) | 0.0009 B | 0.0000 B | 76.61 B | 786.30 B |
| includes (deno) | 0.0010 B | 0.0000 B | 71.19 B | 831.91 B |
| indexOf (bun) | 0.0229 B | 0.0000 B | 32.00 B | 1.34 KB |
| includes (bun) | 0.0702 B | 0.0000 B | 32.00 B | 192.00 B |
| indexOf (node) | 0.0885 B | 0.0879 B | 124.09 B | 79.89 KB |
| includes (node) | 0.0889 B | 0.0879 B | 64.19 B | 79.89 KB |

