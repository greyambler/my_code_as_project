import { sumLength } from './sumLength';

it('a.length (Vasay.length = 5) + b.length (Ivan.length = 4)', () => {
  expect(sumLength('Vasay', 'Ivan')).toBe(9);
});
