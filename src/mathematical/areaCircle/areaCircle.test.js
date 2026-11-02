import { areaCircle } from './areaCircle';

it('площадь окружности радиусом 10', () => {
  expect(areaCircle(10)).toBe(314);
});
