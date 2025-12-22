# array-from-set

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayFrom (deno) | 1.63 µs | 1.59 µs | 1.65 µs | 1.69 µs | 1.73 µs |
| arraySpread (deno) | 1.64 µs | 1.59 µs | 1.66 µs | 1.79 µs | 1.79 µs |
| arrayFrom (node) | 1.65 µs | 1.61 µs | 1.66 µs | 1.76 µs | 1.78 µs |
| arraySpread (node) | 1.66 µs | 1.60 µs | 1.67 µs | 1.78 µs | 1.79 µs |
| arrayFrom (bun) | 11.90 µs | 11.73 µs | 11.99 µs | 12.02 µs | 12.03 µs |
| arraySpread (bun) | 13.14 µs | 12.74 µs | 13.23 µs | 13.42 µs | 13.48 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (deno) | 0.5522 B | 0.0000 B | 7.29 B | 9.39 B |
| arrayFrom (bun) | 48.00 B | 0.0000 B | 384.00 B | 576.00 B |
| arraySpread (bun) | 85.64 B | 0.0000 B | 750.00 B | 942.00 B |
| arraySpread (deno) | 440.44 B | 0.0000 B | 8.00 KB | 8.17 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 423.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 415.96 KB |

