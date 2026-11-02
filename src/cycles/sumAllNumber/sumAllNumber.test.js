import { sumAllNumber } from './sumAllNumber';

describe('sumAllNumber', () => {
  it('Вывести в консоль сумму всех целы хчисел от 50 до 100.', () => {
    expect(sumAllNumber()).toBe(3725);
  });
});
