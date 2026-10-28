export function getMaxElementArray(arr) {
  let minEl;
  arr.forEach((item) => {
    if (minEl === undefined) {
      minEl = item;
    }
    if (minEl < item) {
      minEl = item;
    }
  });

  return minEl;
}
