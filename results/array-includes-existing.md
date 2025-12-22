# array-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 1.26 ns | 0.09 ns | 0.09 ns | 0.17 ns | 359.31 ns |
| indexOf (deno) | 94.25 ns | 93.21 ns | 94.93 ns | 103.07 ns | 131.08 ns |
| includes (deno) | 94.35 ns | 93.14 ns | 94.86 ns | 107.67 ns | 149.71 ns |
| indexOf (bun) | 166.09 ns | 161.86 ns | 164.11 ns | 214.21 ns | 330.59 ns |
| includes (node) | 404.99 ns | 401.95 ns | 404.31 ns | 439.08 ns | 471.97 ns |
| indexOf (node) | 405.10 ns | 402.65 ns | 404.69 ns | 421.99 ns | 470.88 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0195 B | 0.0000 B | 32.00 B | 928.00 B |
| indexOf (bun) | 0.0945 B | 0.0000 B | 64.00 B | 96.00 B |
| includes (deno) | 0.3387 B | 0.0000 B | 102.53 B | 613.98 B |
| indexOf (deno) | 0.3914 B | 0.0000 B | 102.53 B | 711.93 B |
| indexOf (node) | 0.5000 B | 0.0879 B | 141.93 B | 209.50 B |
| includes (node) | 0.7847 B | 0.0879 B | 141.34 B | 331.14 B |

