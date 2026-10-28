import { diff } from './diff';

it('Вывести разницу между 20 30', () => {
  expect(diff(20, 30)).toBe(10);
});
