export function largestNumber(a, b) {
  console.log(`Большее a = ${a} b = ${b}: ${a > b ? 'a' : 'b'} => ${a > b ? a : b}`);
  return a > b ? a : b;
}
