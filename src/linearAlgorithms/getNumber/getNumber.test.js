import { getNumber } from './getNumber';

it('Сложить цифр введённого числа - 123 равно 6', () => {
  expect(getNumber(123)).toBe(6);
});

it('Сложить цифр введённого числа - 1232 равно undefined', () => {
  expect(getNumber(1232)).toBeUndefined();
});
