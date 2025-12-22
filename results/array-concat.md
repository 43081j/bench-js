# array-concat

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 1.09 µs | 975.89 ns | 1.13 µs | 1.29 µs | 1.33 µs |
| arrayConcat (deno) | 1.14 µs | 1.11 µs | 1.16 µs | 1.22 µs | 1.22 µs |
| arrayConcat (node) | 1.35 µs | 1.30 µs | 1.36 µs | 1.43 µs | 1.44 µs |
| arraySpread (bun) | 4.66 µs | 4.33 µs | 4.70 µs | 5.50 µs | 5.71 µs |
| arraySpread (node) | 4.86 µs | 4.44 µs | 4.52 µs | 5.01 µs | 13.93 µs |
| arraySpread (deno) | 4.92 µs | 4.48 µs | 4.63 µs | 5.02 µs | 13.87 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.86 B | 0.0000 B | 231.94 B | 245.96 B |
| arrayConcat (bun) | 5.89 B | 0.0000 B | 800.00 B | 896.00 B |
| arrayConcat (node) | 6.64 B | 3.72 B | 9.55 B | 13.27 B |
| arraySpread (bun) | 108.90 B | 0.0000 B | 1.53 KB | 3.30 KB |
| arraySpread (node) | 6.47 KB | 6.40 KB | 7.68 KB | 116.54 KB |
| arraySpread (deno) | 6.53 KB | 5.93 KB | 7.74 KB | 45.73 KB |

