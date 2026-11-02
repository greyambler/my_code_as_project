export function sumLength(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(`Length = a + b  = ${a.length + b.length}`);
    return a.length + b.length;
  } else {
    console.log(`Входные данные не строки`);
    return undefined;
  }
}
