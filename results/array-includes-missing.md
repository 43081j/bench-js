# array-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 2.04 ns | 0.09 ns | 0.09 ns | 0.09 ns | 473.84 ns |
| includes (deno) | 170.60 ns | 167.64 ns | 169.58 ns | 186.43 ns | 399.34 ns |
| indexOf (deno) | 171.22 ns | 167.71 ns | 169.65 ns | 231.86 ns | 400.16 ns |
| indexOf (bun) | 320.45 ns | 317.18 ns | 319.15 ns | 366.61 ns | 367.45 ns |
| includes (node) | 790.17 ns | 784.71 ns | 787.26 ns | 835.21 ns | 871.01 ns |
| indexOf (node) | 791.05 ns | 784.38 ns | 788.72 ns | 831.13 ns | 859.27 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (bun) | 0.0000 B | 0.0000 B | 0.0000 B | 0.0000 B |
| includes (bun) | 0.0262 B | 0.0000 B | 128.00 B | 1.00 KB |
| indexOf (node) | 0.3260 B | 0.0879 B | 33.88 B | 69.43 B |
| includes (deno) | 0.3839 B | 0.0000 B | 146.36 B | 385.44 B |
| indexOf (deno) | 0.3950 B | 0.0000 B | 146.36 B | 395.41 B |
| includes (node) | 1.21 B | 0.1465 B | 223.34 B | 262.06 B |

