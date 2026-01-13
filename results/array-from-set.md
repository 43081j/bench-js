# array-from-set

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 1.63 µs | 1.59 µs | 1.64 µs | 1.68 µs | 1.70 µs |
| arrayFrom (deno) | 1.63 µs | 1.60 µs | 1.64 µs | 1.69 µs | 1.69 µs |
| arraySpread (node) | 1.63 µs | 1.59 µs | 1.65 µs | 1.68 µs | 1.69 µs |
| arrayFrom (node) | 1.65 µs | 1.61 µs | 1.66 µs | 1.71 µs | 1.72 µs |
| arrayFrom (bun) | 12.51 µs | 10.88 µs | 12.26 µs | 21.87 µs | 393.80 µs |
| arraySpread (bun) | 13.34 µs | 13.14 µs | 13.37 µs | 13.43 µs | 13.55 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 26.18 B | 0.0000 B | 32.00 B | 288.00 B |
| arrayFrom (deno) | 28.41 B | 0.0000 B | 189.51 B | 198.90 B |
| arrayFrom (bun) | 153.28 B | 0.0000 B | 128.00 KB | 4.63 MB |
| arraySpread (deno) | 4.00 KB | 0.1445 B | 8.00 KB | 8.00 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 431.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 423.96 KB |

