import { arithmeticMean } from './arithmeticMean';

describe('Arithmetic Mean', () => {
  it('Среднее арифметическое нечётных чисел до 6', () => {
    expect(arithmeticMean(6)).toBe(3);
  });
});
