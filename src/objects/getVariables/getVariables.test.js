import { getVariables } from './getVariables';

it('Получить имя из переменной name.', () => {
  expect(getVariables('name')).toBe('admin');
});

it('Получить возраст из переменной age.', () => {
  expect(getVariables('age')).toBe(32);
});

it('Получить роль из переменной role.', () => {
  expect(getVariables('role')).toBe('admin');
});
