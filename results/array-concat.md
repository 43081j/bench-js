# array-concat

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 1.13 µs | 908.94 ns | 1.13 µs | 2.19 µs | 3.98 µs |
| arrayConcat (deno) | 1.17 µs | 1.14 µs | 1.17 µs | 1.40 µs | 1.46 µs |
| arrayConcat (node) | 1.32 µs | 1.28 µs | 1.34 µs | 1.40 µs | 1.45 µs |
| arraySpread (deno) | 4.63 µs | 4.23 µs | 4.32 µs | 4.81 µs | 13.63 µs |
| arraySpread (node) | 4.88 µs | 4.46 µs | 4.54 µs | 4.97 µs | 14.25 µs |
| arraySpread (bun) | 5.89 µs | 4.29 µs | 7.37 µs | 7.58 µs | 7.58 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.69 B | 0.0000 B | 201.95 B | 215.98 B |
| arrayConcat (node) | 6.63 B | 3.72 B | 9.54 B | 13.27 B |
| arraySpread (bun) | 46.38 B | 0.0000 B | 992.00 B | 1.18 KB |
| arrayConcat (bun) | 47.33 B | 0.0000 B | 6.28 KB | 6.52 KB |
| arraySpread (node) | 6.47 KB | 6.40 KB | 7.67 KB | 116.54 KB |
| arraySpread (deno) | 6.54 KB | 5.91 KB | 7.79 KB | 45.76 KB |

