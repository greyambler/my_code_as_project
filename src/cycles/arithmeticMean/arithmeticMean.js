export function arithmeticMean(inputNumber) {
  if (inputNumber !== null) {
    let sum = 0;
    let count = 0;

    for (let index = 0; index < +inputNumber; index++) {
      if (index % 2 !== 0) {
        sum = sum + index;
        count++;
      }
    }

    return sum / count;
  } else {
    return undefined;
  }
}
