# array-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 2.36 ns | 0.09 ns | 0.09 ns | 0.20 ns | 773.38 ns |
| indexOf (deno) | 171.02 ns | 168.21 ns | 170.10 ns | 184.14 ns | 403.15 ns |
| includes (deno) | 171.06 ns | 168.13 ns | 170.02 ns | 187.31 ns | 405.55 ns |
| indexOf (bun) | 324.15 ns | 317.17 ns | 319.19 ns | 462.51 ns | 639.03 ns |
| indexOf (node) | 792.03 ns | 785.81 ns | 790.14 ns | 832.86 ns | 863.40 ns |
| includes (node) | 792.40 ns | 785.62 ns | 790.91 ns | 845.74 ns | 890.66 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0213 B | 0.0000 B | 192.00 B | 768.00 B |
| indexOf (bun) | 0.1226 B | 0.0000 B | 32.00 B | 64.00 B |
| indexOf (node) | 0.2945 B | 0.0879 B | 33.88 B | 63.01 B |
| includes (deno) | 0.3846 B | 0.0000 B | 146.36 B | 385.39 B |
| indexOf (deno) | 0.3946 B | 0.0000 B | 146.36 B | 395.41 B |
| includes (node) | 1.09 B | 0.1465 B | 197.29 B | 236.00 B |

