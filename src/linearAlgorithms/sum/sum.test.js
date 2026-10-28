import { sum } from './sum';

describe('sum', () => {
  it('Сложить 1 + 2 равно 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('Сложить 2 + 3 равно 5', () => {
    expect(sum(2, 3)).toEqual(5);
  });
  it('Сложить 2 + 3 не равно 3', () => {
    expect(sum(2, 3)).not.toEqual(3);
  });
});
