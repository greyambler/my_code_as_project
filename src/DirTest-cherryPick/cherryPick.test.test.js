import { cherryPick } from './cherryPick';

describe('Arithmetic Mean', () => {
  it('Среднее арифметическое нечётных чисел до 6', () => {
    expect(cherryPick(6)).toBe(3);
  });
});
