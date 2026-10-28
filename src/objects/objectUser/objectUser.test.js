import { objectUser } from './objectUser';

it('Создайте объект user, содержащий поле name созначением John', () => {
  expect(objectUser().name).toBe('John');
});

it('Создайте объект user, содержащий поле name созначением Equal John', () => {
  expect(objectUser()).toEqual({ name: 'John' });
});
