# array-concat

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arrayConcat (bun) | 1.01 µs | 921.75 ns | 1.04 µs | 1.43 µs | 1.50 µs |
| arrayConcat (deno) | 1.18 µs | 1.15 µs | 1.19 µs | 1.24 µs | 1.25 µs |
| arrayConcat (node) | 1.37 µs | 1.34 µs | 1.37 µs | 1.49 µs | 1.52 µs |
| arraySpread (node) | 4.98 µs | 4.52 µs | 4.65 µs | 5.08 µs | 14.30 µs |
| arraySpread (deno) | 5.13 µs | 4.64 µs | 4.84 µs | 5.33 µs | 14.19 µs |
| arraySpread (bun) | 5.53 µs | 4.20 µs | 7.56 µs | 7.84 µs | 8.19 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayConcat (deno) | 1.92 B | 0.0000 B | 231.94 B | 245.96 B |
| arrayConcat (bun) | 5.30 B | 0.0000 B | 800.00 B | 864.00 B |
| arraySpread (bun) | 66.11 B | 0.0000 B | 1.00 KB | 1.74 KB |
| arrayConcat (node) | 80.71 B | 3.72 B | 228.84 B | 242.12 B |
| arraySpread (node) | 6.48 KB | 6.40 KB | 7.71 KB | 116.58 KB |
| arraySpread (deno) | 6.54 KB | 5.93 KB | 7.76 KB | 45.75 KB |

