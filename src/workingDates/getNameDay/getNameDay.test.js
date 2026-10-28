import { getNameDay } from './getNameDay';

it('Выведит четверг на дату 01.01.2026.', () => {
  const dateUnput = new Date('2026-01-01');
  expect(getNameDay(dateUnput)).toBe('четверг');
});

it('Выведит понедельник на дату 05.01.2026.', () => {
  const dateUnput = new Date('2026-01-01');
  expect(getNameDay(dateUnput)).toBe('четверг');
});
