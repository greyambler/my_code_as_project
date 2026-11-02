export function getMinElementArray(arr) {
  let minEl;
  arr.forEach((item) => {
    if (minEl === undefined) {
      minEl = item;
    }
    if (minEl > item) {
      minEl = item;
    }
  });
  return minEl;
}
