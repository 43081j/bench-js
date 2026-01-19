# array-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 1.20 ns | 0.09 ns | 0.09 ns | 0.09 ns | 296.33 ns |
| includes (deno) | 93.46 ns | 92.42 ns | 94.17 ns | 103.27 ns | 138.46 ns |
| indexOf (deno) | 94.21 ns | 92.49 ns | 94.23 ns | 107.82 ns | 227.03 ns |
| indexOf (bun) | 164.48 ns | 161.86 ns | 163.91 ns | 192.05 ns | 201.88 ns |
| indexOf (node) | 403.95 ns | 401.77 ns | 403.89 ns | 416.72 ns | 440.57 ns |
| includes (node) | 404.22 ns | 400.87 ns | 403.12 ns | 444.75 ns | 495.15 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0159 B | 0.0000 B | 64.00 B | 768.00 B |
| indexOf (bun) | 0.0311 B | 0.0000 B | 32.00 B | 32.00 B |
| indexOf (deno) | 0.3130 B | 0.0000 B | 135.37 B | 569.28 B |
| includes (deno) | 0.3612 B | 0.0000 B | 110.53 B | 662.05 B |
| indexOf (node) | 0.7214 B | 0.0879 B | 149.58 B | 306.58 B |
| includes (node) | 0.8118 B | 0.0879 B | 149.34 B | 342.59 B |

