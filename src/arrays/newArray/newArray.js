export function newArray(arr) {
  const newArr = [];
  arr.forEach((item) => {
    newArr.push(item * 2);
  });

  return newArr;
}
