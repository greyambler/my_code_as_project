import { isTriangleRectangular } from './isTriangleRectangular';

it('Определить, является ли треугольник прямоугольным a = 10, b = 8, c = 6', () => {
  expect(isTriangleRectangular(10, 8, 6)).toBe('Yes');
});
