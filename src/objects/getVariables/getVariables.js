export function getVariables(nemeViriable) {
  const admin = {
    name: 'admin',
    age: 32,
    role: 'admin',
  };
  const { name, age, role } = admin;
  switch (nemeViriable) {
    case 'name':
      return name;
    case 'age':
      return age;
    case 'role':
      return role;
    default:
      return undefined;
  }
}
