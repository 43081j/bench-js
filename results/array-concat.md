# array-concat

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 1.12 µs | 943.76 ns | 1.19 µs | 1.50 µs | 1.57 µs |
| arrayConcat (deno) | 1.19 µs | 1.15 µs | 1.20 µs | 1.34 µs | 1.36 µs |
| arrayConcat (node) | 1.48 µs | 1.40 µs | 1.50 µs | 1.64 µs | 1.73 µs |
| arraySpread (deno) | 5.00 µs | 4.53 µs | 4.67 µs | 5.20 µs | 14.15 µs |
| arraySpread (node) | 5.06 µs | 4.59 µs | 4.72 µs | 5.08 µs | 14.13 µs |
| arraySpread (bun) | 5.48 µs | 4.48 µs | 5.72 µs | 7.50 µs | 7.71 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.71 B | 0.0000 B | 201.95 B | 215.97 B |
| arrayConcat (bun) | 5.84 B | 0.0000 B | 800.00 B | 864.00 B |
| arrayConcat (node) | 83.33 B | 3.72 B | 236.71 B | 249.99 B |
| arraySpread (bun) | 144.64 B | 0.0000 B | 1.88 KB | 3.53 KB |
| arraySpread (node) | 6.47 KB | 6.40 KB | 7.67 KB | 116.54 KB |
| arraySpread (deno) | 6.53 KB | 5.91 KB | 7.76 KB | 45.73 KB |

