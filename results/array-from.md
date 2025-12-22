# array-from

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 425.63 ns | 403.50 ns | 430.56 ns | 498.52 ns | 515.36 ns |
| arrayFrom (deno) | 429.07 ns | 408.20 ns | 434.11 ns | 502.28 ns | 531.74 ns |
| arrayFrom (node) | 491.97 ns | 459.84 ns | 500.37 ns | 552.41 ns | 579.50 ns |
| arraySpread (node) | 513.90 ns | 469.31 ns | 531.61 ns | 575.22 ns | 583.35 ns |
| arrayFrom (bun) | 867.64 ns | 769.58 ns | 905.75 ns | 1.19 µs | 1.30 µs |
| arraySpread (bun) | 1.17 µs | 1.10 µs | 1.19 µs | 1.26 µs | 1.36 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (deno) | 4.65 B | 0.0000 B | 138.05 B | 339.12 B |
| arraySpread (bun) | 5.08 B | 0.0000 B | 32.00 B | 736.00 B |
| arrayFrom (bun) | 16.33 B | 0.0000 B | 1.72 KB | 3.06 KB |
| arraySpread (deno) | 181.90 B | 0.0000 B | 8.00 KB | 8.35 KB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.07 KB | 1.32 MB |
| arrayFrom (node) | 8.00 KB | 8.00 KB | 8.12 KB | 1.37 MB |

