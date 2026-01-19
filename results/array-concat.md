# array-concat

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 1.07 µs | 923.60 ns | 1.09 µs | 1.87 µs | 1.96 µs |
| arrayConcat (deno) | 1.20 µs | 1.17 µs | 1.20 µs | 1.28 µs | 1.32 µs |
| arrayConcat (node) | 1.35 µs | 1.33 µs | 1.36 µs | 1.44 µs | 1.48 µs |
| arraySpread (bun) | 4.37 µs | 4.13 µs | 4.44 µs | 4.92 µs | 5.03 µs |
| arraySpread (deno) | 4.76 µs | 4.34 µs | 4.42 µs | 5.18 µs | 13.78 µs |
| arraySpread (node) | 4.83 µs | 4.42 µs | 4.51 µs | 4.97 µs | 14.00 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.66 B | 0.0000 B | 193.07 B | 207.10 B |
| arrayConcat (node) | 6.63 B | 3.72 B | 9.54 B | 13.27 B |
| arrayConcat (bun) | 58.63 B | 0.0000 B | 5.16 KB | 8.70 KB |
| arraySpread (bun) | 69.49 B | 0.0000 B | 1.00 KB | 2.38 KB |
| arraySpread (node) | 6.48 KB | 6.40 KB | 7.69 KB | 116.55 KB |
| arraySpread (deno) | 6.50 KB | 5.92 KB | 7.53 KB | 45.51 KB |

