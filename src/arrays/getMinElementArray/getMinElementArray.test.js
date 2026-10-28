import { getMinElementArray } from './getMinElementArray';

describe('min element', () => {
  it('Нийти минимальный элемент [1,2,3,4,5]', () => {
    expect(getMinElementArray([1, 2, 3, 4, 5])).toBe(1);
  });
});
