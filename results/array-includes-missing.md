# array-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 2.06 ns | 0.09 ns | 0.09 ns | 0.10 ns | 455.07 ns |
| includes (deno) | 171.06 ns | 168.44 ns | 170.42 ns | 192.36 ns | 404.51 ns |
| indexOf (deno) | 171.40 ns | 168.51 ns | 170.42 ns | 186.77 ns | 404.43 ns |
| indexOf (bun) | 320.10 ns | 317.16 ns | 319.12 ns | 366.58 ns | 390.57 ns |
| includes (node) | 790.58 ns | 785.71 ns | 789.33 ns | 829.38 ns | 838.67 ns |
| indexOf (node) | 790.99 ns | 785.31 ns | 789.65 ns | 834.68 ns | 849.87 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| indexOf (bun) | 0.0000 B | 0.0000 B | 0.0000 B | 0.0000 B |
| includes (bun) | 0.0239 B | 0.0000 B | 160.00 B | 928.00 B |
| indexOf (deno) | 0.3954 B | 0.0000 B | 146.36 B | 395.41 B |
| includes (deno) | 0.4081 B | 0.0000 B | 146.36 B | 408.96 B |
| indexOf (node) | 1.01 B | 0.0879 B | 160.47 B | 217.93 B |
| includes (node) | 1.13 B | 0.1445 B | 205.29 B | 243.87 B |

