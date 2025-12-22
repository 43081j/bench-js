# array-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 2.25 ns | 0.09 ns | 0.09 ns | 0.09 ns | 633.89 ns |
| includes (deno) | 169.97 ns | 168.13 ns | 170.00 ns | 183.87 ns | 207.27 ns |
| indexOf (deno) | 174.22 ns | 168.20 ns | 170.12 ns | 408.85 ns | 428.96 ns |
| indexOf (bun) | 321.04 ns | 317.16 ns | 319.10 ns | 367.84 ns | 636.13 ns |
| indexOf (node) | 790.57 ns | 785.74 ns | 787.99 ns | 834.41 ns | 838.52 ns |
| includes (node) | 791.01 ns | 785.62 ns | 789.00 ns | 829.87 ns | 859.66 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0155 B | 0.0000 B | 32.00 B | 576.00 B |
| indexOf (bun) | 0.2433 B | 0.0000 B | 64.00 B | 128.00 B |
| indexOf (deno) | 0.5424 B | 0.0000 B | 135.37 B | 532.12 B |
| includes (deno) | 0.5746 B | 0.0000 B | 135.37 B | 578.62 B |
| indexOf (node) | 1.01 B | 0.0879 B | 160.47 B | 217.93 B |
| includes (node) | 1.02 B | 0.1445 B | 182.25 B | 220.98 B |

