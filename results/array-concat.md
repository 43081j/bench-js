# array-concat

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 1.06 µs | 893.50 ns | 1.11 µs | 1.44 µs | 1.55 µs |
| arrayConcat (deno) | 1.21 µs | 1.15 µs | 1.23 µs | 1.30 µs | 1.33 µs |
| arrayConcat (node) | 1.43 µs | 1.38 µs | 1.44 µs | 1.49 µs | 1.54 µs |
| arraySpread (bun) | 4.48 µs | 4.03 µs | 4.67 µs | 5.48 µs | 5.62 µs |
| arraySpread (deno) | 4.94 µs | 4.47 µs | 4.64 µs | 5.10 µs | 13.97 µs |
| arraySpread (node) | 4.95 µs | 4.51 µs | 4.61 µs | 5.15 µs | 14.21 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.76 B | 0.0000 B | 201.95 B | 215.97 B |
| arrayConcat (bun) | 6.36 B | 0.0000 B | 928.00 B | 992.00 B |
| arraySpread (bun) | 49.45 B | 0.0000 B | 1.00 KB | 1.59 KB |
| arrayConcat (node) | 83.33 B | 3.72 B | 236.71 B | 249.98 B |
| arraySpread (node) | 6.48 KB | 6.40 KB | 7.69 KB | 116.55 KB |
| arraySpread (deno) | 6.54 KB | 5.91 KB | 7.79 KB | 45.76 KB |

