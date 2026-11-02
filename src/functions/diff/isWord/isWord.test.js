import { isWord } from './isWord';

describe('isWord', () => {
  it('Вывести true в строек "функцию" одно слово', () => {
    expect(isWord('функцию')).toBe(true);
  });

  it('Вывести false в строек "функцию новая" несколько слов', () => {
    expect(isWord('функцию новая')).toBe(false);
  });
});
