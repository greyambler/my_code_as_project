export function sumArrays(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum = sum + item;
  });

  return sum;
}
