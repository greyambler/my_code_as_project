import { getMaxElementArray } from './getMaxElementArray';

describe('max element', () => {
  it('Найти минимальный элемент [1,2,3,4,5]', () => {
    expect(getMaxElementArray([1, 2, 3, 4, 5])).toBe(5);
  });
});
