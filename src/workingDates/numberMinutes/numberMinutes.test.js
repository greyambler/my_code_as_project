import { numberMinutes } from './numberMinutes';

it('Выводит количество минут', () => {
  //ставим время по гринвичу 0 часа ночи 01.01.2026
  jest.useFakeTimers().setSystemTime(new Date('2026-01-01T00:00:00Z'));
  //ставим время В Москве 30мин первого ночи 01.01.2026
  const inputDate = new Date('2026-01-01T00:30:00Z');
  // разница от нринвича 3 часа плюс в Москве 30ми -> 180 мин + 30 мин
  // временные колизии не мой конек.
  expect(numberMinutes(inputDate)).toBe('210');
  jest.useRealTimers();
});
