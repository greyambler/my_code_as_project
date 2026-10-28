import { isHiddenButton } from './isHiddenButton';

it('Если входная строка пуста то возвращается true', () => {
  expect(isHiddenButton('')).toBe(true);
});

it('Если входная строка "не пуста" то возвращается false', () => {
  expect(isHiddenButton('не пуста')).toBe(false);
});
