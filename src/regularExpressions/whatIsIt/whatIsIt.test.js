import { whatIsIt } from './whatIsIt';

describe('whatIsIt', () => {
  it('является ли введённая строка 20 01 2026 Датой.', () => {
    expect(whatIsIt('20 01 2026')).toBe(`input is date = 20 01 2026`);
  });

  it('является ли введённая строка test@mail.ru email.', () => {
    expect(whatIsIt('test@mail.ru')).toBe(`input is mail = test@mail.ru`);
  });

  it('является ли введённая строка +7(495) 111 22 33 phone', () => {
    expect(whatIsIt('+7(495) 111 22 33')).toBe('input is phone = +7(495) 111 22 33');
  });
});
