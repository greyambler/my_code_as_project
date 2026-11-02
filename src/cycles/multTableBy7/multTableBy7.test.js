import { multTableBy7 } from './multTableBy7';

describe('Вывести таблицу умножения на 7', () => {
  it('Вывести таблицу умножения на 7 * 1', () => {
    expect(multTableBy7(1)).toBe(7);
  });

  it('Вывести таблицу умножения на 7 * 2', () => {
    expect(multTableBy7(2)).toBe(14);
  });

  it('Вывести таблицу умножения на 7 * 3', () => {
    expect(multTableBy7(3)).toBe(21);
  });
  it('Вывести таблицу умножения на 7 * 4', () => {
    expect(multTableBy7(3)).toBe(21);
  });

  it('Вывести таблицу умножения на 7 * 5', () => {
    expect(multTableBy7(3)).toBe(21);
  });

  it('Вывести таблицу умножения на 7 * 6', () => {
    expect(multTableBy7(6)).toBe(42);
  });

  it('Вывести таблицу умножения на 7 * 7', () => {
    expect(multTableBy7(7)).toBe(49);
  });

  it('Вывести таблицу умножения на 7 * 8', () => {
    expect(multTableBy7(8)).toBe(56);
  });

  it('Вывести таблицу умножения на 7 * 9', () => {
    expect(multTableBy7(9)).toBe(63);
  });

  it('Вывести таблицу умножения на 7 * 10', () => {
    expect(multTableBy7(10)).toBe(70);
  });
});
