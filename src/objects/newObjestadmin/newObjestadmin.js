export function newObjestadmin() {
  const user = {
    name: 'John',
    age: 32,
  };

  const admin = { ...user };

  admin.name = 'admin';
  admin.role = 'admin';

  return admin;
}
