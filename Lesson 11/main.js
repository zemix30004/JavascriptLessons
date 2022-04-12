//Документация JSdoc для удобства работы с функциями

/**
 * Фукнция преобразует строку с временем в минуты
 * @param {string} time время в виде строки, например
 * "02:08". Может быть в диапазоне от "00:00" до "23:59".
 * @return {number} целое число в минутах. Например
 * time="02:08" вернет 128.
 */
function timeToMinute(time) {
  let hour = time.split(":")[0];
  return hour;
}
console.log(timeToMinute("02:08")); //02

function timeToMinute(time) {
  let hour = +time.split(":")[0]; //тут + корректирует 2 вместо 02
  return hour;
}
console.log(timeToMinute("02:08")); //2

function timeToMinute(time) {
  try {
    let hour = +time.split(":")[0];
    let minute = +time.split(":")[1];
    if (!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)) {
      throw new RangeError("Нестандартный формат времени");
    }
    return hour * 60 + minute;
  } catch (error) {
    console.log(error);
  }
}
console.log(timeToMinute("09:09")); //549
// console.log(timeToMinute("23:59")); //1439
