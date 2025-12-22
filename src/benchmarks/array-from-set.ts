const data = new Set(Array.from({length: 1000}, (_, i) => i));

export function arrayFrom() {
  return Array.from(data);
}

export function arraySpread() {
  return [...data];
}
