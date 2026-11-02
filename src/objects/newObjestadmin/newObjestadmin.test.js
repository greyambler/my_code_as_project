import { newObjestadmin } from './newObjestadmin';

it('Создать копию объекта user с именем admin .', () => {
  // expect(newObjestadmin()).toEqual({ name: 'admin' });
  expect(newObjestadmin().name).toBe('admin');
});

it('Создать копию объекта user с именем admin роль admin .', () => {
  expect(newObjestadmin().role).toBe('admin');
});
