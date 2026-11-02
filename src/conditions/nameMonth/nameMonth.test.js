import { nameMonth } from './nameMonth';

describe('Name Month', () => {
  it('Сообщить название месяца по номеру 0', () => {
    expect(nameMonth(0)).toBeUndefined();
  });

  it('Сообщить название месяца по номеру 1', () => {
    expect(nameMonth(1)).toBe('Январь');
  });

  it('Сообщить название месяца по номеру 2', () => {
    expect(nameMonth(2)).toBe('Февраль');
  });

  it('Сообщить название месяца по номеру 12', () => {
    expect(nameMonth(12)).toBe('Декабрь');
  });

  it('При вводе ошибочного числа вернет undefined', () => {
    expect(nameMonth(13)).toBeUndefined();
  });
});
