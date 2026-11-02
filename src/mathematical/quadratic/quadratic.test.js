import { quadratic } from './quadratic';

it('корни квадратного уравнения с коэффициентами 1, 2 и 3.', () => {
  expect(quadratic(1, 2, 3)).toBeUndefined();
});

it('корни квадратного уравнения с коэффициентами 1, -2 и -3.', () => {
  expect(quadratic(1, -2, -3)).toBe('3, -1');
});
