export function getNameDay(Date) {
  switch (Date.getDay()) {
    case 0:
      return 'воскресенье';
    case 1:
      return 'понедельник';
    case 2:
      return 'вторник';
    case 3:
      return 'среда';
    case 4:
      return 'четверг';
    case 5:
      return 'пятница';
    case 6:
      return 'суббота';
  }
}
