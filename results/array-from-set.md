# array-from-set

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayFrom (deno) | 1.60 µs | 1.58 µs | 1.61 µs | 1.65 µs | 1.65 µs |
| arraySpread (deno) | 1.60 µs | 1.58 µs | 1.61 µs | 1.64 µs | 1.65 µs |
| arrayFrom (node) | 1.60 µs | 1.57 µs | 1.61 µs | 1.66 µs | 1.68 µs |
| arraySpread (node) | 1.61 µs | 1.57 µs | 1.63 µs | 1.66 µs | 1.67 µs |
| arrayFrom (bun) | 12.18 µs | 10.78 µs | 11.89 µs | 21.06 µs | 355.29 µs |
| arraySpread (bun) | 12.81 µs | 12.69 µs | 12.81 µs | 12.86 µs | 13.09 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arraySpread (bun) | 16.00 B | 0.0000 B | 64.00 B | 192.00 B |
| arrayFrom (deno) | 32.48 B | 0.0000 B | 185.53 B | 194.88 B |
| arrayFrom (bun) | 135.33 B | 0.0000 B | 128.00 KB | 4.13 MB |
| arraySpread (deno) | 2.05 KB | 0.1445 B | 8.00 KB | 8.20 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 439.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 431.96 KB |

