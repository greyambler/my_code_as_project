export function enterAge(age) {
  const user = {
    name: 'John',
  };
  if (typeof age === 'number' && age !== null && age > 0) {
    user.age = +age;
  }
  return user;
}
