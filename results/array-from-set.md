# array-from-set

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 1.61 µs | 1.59 µs | 1.62 µs | 1.67 µs | 1.68 µs |
| arrayFrom (node) | 1.62 µs | 1.58 µs | 1.62 µs | 1.67 µs | 1.70 µs |
| arraySpread (node) | 1.62 µs | 1.59 µs | 1.63 µs | 1.65 µs | 1.67 µs |
| arrayFrom (deno) | 1.62 µs | 1.60 µs | 1.63 µs | 1.67 µs | 1.70 µs |
| arrayFrom (bun) | 11.08 µs | 11.04 µs | 11.09 µs | 11.13 µs | 11.13 µs |
| arraySpread (bun) | 12.19 µs | 12.13 µs | 12.21 µs | 12.25 µs | 12.25 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (deno) | 34.14 B | 0.0000 B | 195.51 B | 204.83 B |
| arrayFrom (bun) | 48.86 B | 32.00 B | 268.00 B | 684.00 B |
| arraySpread (bun) | 91.38 B | 0.0000 B | 868.00 B | 1.16 KB |
| arraySpread (deno) | 298.72 B | 0.0000 B | 8.00 KB | 8.17 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.00 KB | 431.96 KB |
| arrayFrom (node) | 8.00 KB | 7.99 KB | 8.01 KB | 431.96 KB |

