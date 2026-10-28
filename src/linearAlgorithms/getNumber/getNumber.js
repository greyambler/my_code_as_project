export function getNumber(inputNumber) {
  if (typeof inputNumber === 'number' && String(inputNumber).length === 3 && inputNumber !== null) {
    let sum = 0;
    const rm = String(inputNumber).split('');
    rm.forEach((item) => {
      sum = sum + Number(item);
    });
    console.log(`Sum = ${sum}`);
    return sum;
  } else {
    console.log(`inputNumber not number`);
    return undefined;
  }
}
