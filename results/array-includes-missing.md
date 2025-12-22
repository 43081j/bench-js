# array-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 2.26 ns | 0.09 ns | 0.09 ns | 0.19 ns | 633.26 ns |
| indexOf (deno) | 169.95 ns | 168.21 ns | 170.15 ns | 180.65 ns | 197.30 ns |
| includes (deno) | 170.07 ns | 168.13 ns | 170.06 ns | 185.13 ns | 208.78 ns |
| indexOf (bun) | 321.60 ns | 317.21 ns | 319.25 ns | 366.92 ns | 633.96 ns |
| indexOf (node) | 790.76 ns | 785.51 ns | 788.50 ns | 840.16 ns | 862.22 ns |
| includes (node) | 791.74 ns | 785.58 ns | 790.02 ns | 839.53 ns | 847.11 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0138 B | 0.0000 B | 64.00 B | 512.00 B |
| indexOf (bun) | 0.1212 B | 0.0000 B | 32.00 B | 64.00 B |
| includes (deno) | 0.4749 B | 0.0000 B | 135.37 B | 478.70 B |
| indexOf (deno) | 0.6631 B | 0.0000 B | 238.13 B | 669.09 B |
| indexOf (node) | 1.11 B | 0.0879 B | 182.26 B | 239.72 B |
| includes (node) | 1.13 B | 0.1445 B | 205.29 B | 243.87 B |

