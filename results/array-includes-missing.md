# array-includes-missing

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| includes (bun) | 2.42 ns | 0.16 ns | 0.17 ns | 0.18 ns | 678.92 ns |
| indexOf (deno) | 170.35 ns | 167.90 ns | 169.94 ns | 189.73 ns | 209.63 ns |
| includes (deno) | 174.13 ns | 167.82 ns | 170.42 ns | 379.71 ns | 401.16 ns |
| indexOf (bun) | 323.14 ns | 317.14 ns | 319.25 ns | 376.31 ns | 639.05 ns |
| includes (node) | 791.05 ns | 785.60 ns | 789.23 ns | 842.71 ns | 863.65 ns |
| indexOf (node) | 792.97 ns | 785.78 ns | 792.05 ns | 829.71 ns | 891.94 ns |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| includes (bun) | 0.0125 B | 0.0000 B | 160.00 B | 448.00 B |
| indexOf (bun) | 0.1829 B | 0.0000 B | 32.00 B | 96.00 B |
| includes (deno) | 0.3917 B | 0.0000 B | 146.36 B | 385.44 B |
| indexOf (deno) | 0.6368 B | 0.0000 B | 118.54 B | 638.10 B |
| includes (node) | 0.9853 B | 0.1445 B | 174.25 B | 212.82 B |
| indexOf (node) | 1.09 B | 0.0879 B | 177.45 B | 234.90 B |

