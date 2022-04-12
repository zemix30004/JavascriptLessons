//Функции и массивы
// let arr = [1, 5, 2, 25, 16, 14, 49, 3, 1, 7];
// arr.sort(function (a, b) {
//   if (a == b) return 0;
//   if (a > b) return 1;
//   if (a < b) return -1;
// }); //Array(10) [ 1, 1, 2, 3, 5, 7, 14, 16, 25, 49 ]
// console.lof(arr);

// let arr = [1, 5, 2, 25, 16, 14, 49, 3, 1, 7];
// arr.sort(function (a, b) {
//   return a - b; //тут эта строка заменяет 4 5 6 в предыдущей команде идентично
// }); //Array(10) [ 1, 1, 2, 3, 5, 7, 14, 16, 25, 49 ]
// console.lof(arr);

let arr = [1, 5, 2, 25, 16, 14, 49, 3, 1, 7];
arr.sort((a, b) => a - b); //тут стрелочная функция заменяет запись функции в предыдущей команде
//Array(10) [ 1, 1, 2, 3, 5, 7, 14, 16, 25, 49 ]
console.lof(arr);

//Числа Фибоначчи
// function fibonacci(count) {
//   let fib = [];
//   for (let i = 0; i < count; i++) {
//     if (i == 0) fib[i] = 1;
//     else if (i == 1) fib[i] = 2;
//     else fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// }
// let f = fibonacci(10);
// console.log(f); //Array(10) [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

//Факториал числа
function factorial(n) {
  let fact = 1;
  if (n == 0) return fact;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
let a = factorial(0); //1
console.log(a);
let b = factorial(3); //6
console.log(b);
let c = factorial(5); //120
console.log(c);
