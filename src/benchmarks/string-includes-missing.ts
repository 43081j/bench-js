const data =
  'oranges are almost as good as apples, if apples were oranges'.repeat(100);
const needle = 'bananas';

export function indexOf() {
  return data.indexOf(needle) === -1;
}

export function includes() {
  return !data.includes(needle);
}
