import { largestNumber } from './largestNumber';

describe('LargestNumber', () => {
  it('Выбрать большее число из 1, 2 выбор 2', () => {
    expect(largestNumber(1, 2)).toBe(2);
  });
});
