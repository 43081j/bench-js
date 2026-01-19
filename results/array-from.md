# array-from

## Performance

| benchmark | avg | min | p75 | p99 | max |
| :-------- | --: | --: | --: | --: | --: |
| arraySpread (deno) | 451.74 ns | 416.54 ns | 466.70 ns | 524.83 ns | 542.80 ns |
| arrayFrom (deno) | 452.08 ns | 415.62 ns | 464.38 ns | 542.70 ns | 553.60 ns |
| arraySpread (node) | 579.00 ns | 541.64 ns | 590.99 ns | 639.87 ns | 659.40 ns |
| arrayFrom (node) | 583.07 ns | 547.27 ns | 593.59 ns | 652.64 ns | 679.39 ns |
| arrayFrom (bun) | 917.04 ns | 748.41 ns | 1.03 µs | 1.34 µs | 1.38 µs |
| arraySpread (bun) | 1.42 µs | 1.11 µs | 1.93 µs | 2.04 µs | 2.08 µs |

## Memory

| benchmark | avg | min | max | total |
| :-------- | --: | --: | --: | ----: |
| arrayFrom (deno) | 5.97 B | 0.0000 B | 215.08 B | 262.57 B |
| arraySpread (bun) | 8.95 B | 0.0000 B | 736.00 B | 1.03 KB |
| arrayFrom (bun) | 34.17 B | 0.0000 B | 5.75 KB | 5.91 KB |
| arraySpread (deno) | 291.58 B | 0.0000 B | 8.00 KB | 8.26 KB |
| arrayFrom (node) | 8.00 KB | 7.77 KB | 8.14 KB | 1.16 MB |
| arraySpread (node) | 8.00 KB | 7.99 KB | 8.01 KB | 1.17 MB |

