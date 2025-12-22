const data = Array.from({length: 1000}, (_, i) => i);
const needle = 9999;

export function indexOf() {
  return data.indexOf(needle) === -1;
}

export function includes() {
  return !data.includes(needle);
}
