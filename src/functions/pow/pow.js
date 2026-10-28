export function pow(a, x) {
  let rez = 1;

  for (let index = 0; index < x; index++) {
    rez = rez * a;
  }
  return rez;
}
