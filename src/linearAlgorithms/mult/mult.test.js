import { mult } from './mult';

describe('Test умножить', () => {
  it('Умножить 4 * 2 равно 8', () => {
    expect(mult(4, 2)).toBe(8);
  });

  it('Умножить 4 * 0 равно 0', () => {
    expect(mult(4, 0)).toBe(0);
  });

  it('Умножить 4 * 1 равно 4', () => {
    expect(mult(4, 1)).toBe(4);
  });

  it('Умножить 1 * 1 равно 1', () => {
    expect(mult(1, 1)).toBe(1);
  });
});
