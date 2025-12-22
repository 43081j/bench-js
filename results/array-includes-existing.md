# array-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 1.25 ns | 0.09 ns | 0.09 ns | 0.09 ns | 441.85 ns |
| includes (deno) | 94.86 ns | 93.75 ns | 95.55 ns | 103.24 ns | 129.01 ns |
| indexOf (deno) | 95.61 ns | 93.83 ns | 95.62 ns | 107.96 ns | 230.78 ns |
| indexOf (bun) | 172.02 ns | 161.86 ns | 163.94 ns | 327.68 ns | 377.90 ns |
| includes (node) | 403.63 ns | 401.39 ns | 403.53 ns | 414.47 ns | 450.90 ns |
| indexOf (node) | 404.38 ns | 402.29 ns | 404.40 ns | 415.45 ns | 430.76 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0074 B | 0.0000 B | 32.00 B | 352.00 B |
| indexOf (bun) | 0.1307 B | 0.0000 B | 64.00 B | 128.00 B |
| indexOf (deno) | 0.3073 B | 0.0000 B | 135.37 B | 551.28 B |
| includes (deno) | 0.3933 B | 0.0000 B | 103.36 B | 709.87 B |
| includes (node) | 0.6535 B | 0.0879 B | 110.25 B | 277.10 B |
| indexOf (node) | 0.7574 B | 0.0879 B | 138.89 B | 320.36 B |

