# array-includes-existing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 1.44 ns | 0.16 ns | 0.16 ns | 0.38 ns | 635.69 ns |
| indexOf (deno) | 94.98 ns | 93.83 ns | 95.61 ns | 105.73 ns | 134.66 ns |
| includes (deno) | 95.49 ns | 93.76 ns | 95.53 ns | 107.46 ns | 230.19 ns |
| indexOf (bun) | 164.99 ns | 161.86 ns | 164.10 ns | 199.30 ns | 325.11 ns |
| includes (node) | 404.28 ns | 401.96 ns | 404.19 ns | 419.24 ns | 442.66 ns |
| indexOf (node) | 404.95 ns | 402.64 ns | 404.83 ns | 416.21 ns | 446.18 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0121 B | 0.0000 B | 32.00 B | 544.00 B |
| indexOf (bun) | 0.0313 B | 0.0000 B | 32.00 B | 32.00 B |
| includes (deno) | 0.2402 B | 0.0000 B | 135.37 B | 431.60 B |
| indexOf (deno) | 0.3685 B | 0.0000 B | 110.53 B | 664.38 B |
| indexOf (node) | 0.7231 B | 0.0879 B | 149.58 B | 306.61 B |
| includes (node) | 0.8016 B | 0.0879 B | 141.34 B | 339.07 B |

