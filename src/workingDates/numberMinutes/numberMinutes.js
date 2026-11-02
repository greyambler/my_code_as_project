export function numberMinutes(currentDay) {
  const iputDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ).getTime();
  const raz = (currentDay - iputDate) / 1000 / 60;
  return raz.toFixed(0);
}
