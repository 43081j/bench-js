# array-from-set

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayFrom (node) | 1.61 µs | 1.58 µs | 1.62 µs | 1.69 µs | 1.75 µs |
| arraySpread (node) | 1.61 µs | 1.57 µs | 1.63 µs | 1.68 µs | 1.76 µs |
| arraySpread (deno) | 1.62 µs | 1.60 µs | 1.64 µs | 1.67 µs | 1.69 µs |
| arrayFrom (deno) | 1.63 µs | 1.60 µs | 1.64 µs | 1.68 µs | 1.68 µs |
| arrayFrom (bun) | 6.37 µs | 4.89 µs | 6.00 µs | 16.35 µs | 355.82 µs |
| arraySpread (bun) | 6.62 µs | 6.39 µs | 6.65 µs | 7.37 µs | 7.58 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (deno) | 53.23 B | 0.3340 B | 203.52 B | 212.91 B |
| arraySpread (bun) | 55.58 B | 0.0000 B | 794.00 B | 1.30 KB |
| arrayFrom (bun) | 509.69 B | 0.0000 B | 256.00 KB | 21.13 MB |
| arraySpread (deno) | 1.16 KB | 0.0000 B | 8.00 KB | 8.10 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 431.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 431.96 KB |

