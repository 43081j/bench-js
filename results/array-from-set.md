# array-from-set

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 1.59 µs | 1.56 µs | 1.60 µs | 1.65 µs | 1.69 µs |
| arrayFrom (deno) | 1.60 µs | 1.57 µs | 1.61 µs | 1.66 µs | 1.68 µs |
| arrayFrom (node) | 1.60 µs | 1.58 µs | 1.61 µs | 1.63 µs | 1.66 µs |
| arraySpread (node) | 1.60 µs | 1.57 µs | 1.62 µs | 1.65 µs | 1.67 µs |
| arrayFrom (bun) | 6.33 µs | 5.01 µs | 5.92 µs | 17.22 µs | 369.32 µs |
| arraySpread (bun) | 6.44 µs | 6.27 µs | 6.51 µs | 6.69 µs | 6.77 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (deno) | 1.17 B | 0.0000 B | 7.29 B | 9.39 B |
| arraySpread (bun) | 52.50 B | 0.0000 B | 748.00 B | 1.23 KB |
| arrayFrom (bun) | 523.25 B | 0.0000 B | 256.00 KB | 21.75 MB |
| arraySpread (deno) | 1.60 KB | 0.0000 B | 8.00 KB | 8.00 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 439.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 431.96 KB |

