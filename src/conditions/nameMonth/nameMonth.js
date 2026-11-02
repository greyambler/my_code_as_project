// let month;
// let ifData = true;

// do {
//     month = +prompt("Введите число от 1 до 12:");
//     ifData = (month === null || month > 13 || month < 0 || Number.isNaN(1 - month));

//     if (ifData) {
//         alert("Ошибка: нужно ввести число от 1 до 12");
//         month = prompt("Введите число от 1 до 12:");
//     } else {
//         console.log(nameMonth(+month));
//     }
//     console.log(`ifData = ${ifData}`)
// } while (ifData);

export function nameMonth(inputNumber) {
  if (
    inputNumber !== null ||
    inputNumber < 13 ||
    inputNumber > 0 ||
    typeof inputNumber === 'number'
  ) {
    switch (+inputNumber) {
      case 1: {
        return 'Январь';
      }
      case 2: {
        return 'Февраль';
      }
      case 3: {
        return 'Март';
      }
      case 4: {
        return 'Апрель';
      }
      case 5: {
        return 'Май';
      }
      case 6: {
        return 'Июнь';
      }
      case 7: {
        return 'Июль';
      }
      case 8: {
        return 'Август';
      }
      case 9: {
        return 'Сентябрь';
      }
      case 10: {
        return 'Октябрь';
      }
      case 11: {
        return 'Ноябрь';
      }
      case 12: {
        return 'Декабрь';
      }
    }
  } else {
    return undefined;
  }
}
