//Сумма и произведение в функии в примерах
// let addAndMul = function (num) {
//   num += "";
//   let add = 0;
//   let mul = 1;
//   for (let i = 0; i < num.length; i++) {
//     add += +num[i];
//     mul *= num[i];
//   }
//   return {
//     Сумма: add,
//     Произведение: mul,
//   };
// };
// console.log(addAndMul("795")); //{ 'Сумма': 21, 'Произведение': 315 }
// console.log(addAndMul("457457457")); //{ 'Сумма': 48, 'Произведение': 2744000 }

// function reverse(number) {
//   //сделать функию перевода числа 3486 в 6843 с конца в начало
//   number += "";
//   let reverseNumber = "";
//   for (let i = number.length - 1; i >= 0; i--) {
//     reverseNumber += number[i];
//   }
//   return +reverseNumber;
// }
// console.log(reverse(3486)); //6843

// function number(number) {
//   //вывод четных или нечетных чисел
//   number += "";
//   let chet = 0,
//     nechet = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0) chet++;
//     else nechet++;
//   }
//   return {
//     "Четные числа": chet,
//     "Нечетные числа": nechet,
//   };
// }
// console.log(number(3486)); //{ "Четные числа": 3, "Нечетные числа": 1 }

function randomNumber() {
  //Вывод поиска задуманного числа от 1 до 100
  let number = Math.floor(Math.random() * 100);
  for (let count = 1; count <= 10; count++) {
    let result = +prompt(`Попытка №${count}, Введите число:`);
    if (result == number) {
      return alert(`Вы угадали число! Попыток: ${count}, Число:${number}`);
    } else if (result < number) {
      alert(`Ваше число ${result}, меньше загаданного!`);
    } else if (result > number) {
      alert(`Ваше число ${result}, больше загаданного!`);
    }
  }
  return alert(`Вы не угадали число! Число:${number}`);
}
randomNumber();
