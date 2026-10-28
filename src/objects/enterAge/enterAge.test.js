import { enterAge } from './enterAge';

it('Ввести возраст John = 32', () => {
  expect(enterAge(32)).toMatchObject({ age: 32 });
});
