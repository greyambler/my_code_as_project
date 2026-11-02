export function isTriangleRectangular(a, b, c) {
  let G = [a, b, c].sort((z, x) => x - z);
  let GSotrt = G.slice(0, 3);

  const A = Math.pow(GSotrt[0], 2);
  const B = Math.pow(GSotrt[1], 2) + Math.pow(GSotrt[2], 2);

  if (A == B) {
    return 'Yes';
  } else {
    return 'No';
  }
}
