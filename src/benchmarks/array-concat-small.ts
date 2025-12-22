const data1 = Array.from({length: 10}, (_, i) => i);
const data2 = Array.from({length: 10}, (_, i) => i + 1000);

export function arrayConcat() {
  return data1.concat(data2);
}

export function arraySpread() {
  return [...data1, ...data2];
}
