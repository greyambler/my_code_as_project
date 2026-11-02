export function quadratic(a, b, c) {
  const D = quadraticD(a, b, c);
  if (D > 0) {
    const x = (b * -1 + Math.sqrt(D)) / (2 * a);
    const y = (b * -1 - Math.sqrt(D)) / (2 * a);
    console.log(`first X1 = ${x}, second X2 = ${y}`);
    return `${x}, ${y}`;
  } else if (D == 0) {
    const x = (b * -1 + Math.sqrt(D)) / (2 * a);
    console.log(`single X1 = ${x}`);
    return `${x}`;
    //(-b + √(D))/2a,
  } else if (D < 0) {
    console.log('There is no solution');
    return undefined;
  }
}

function quadraticD(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}
