//Циклы
//a) while

// let count = 0;
// while (count < 10) {
//   console.log(count);
// }//бесконечный  цикл увеличения числа

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// } //цикл работает   0.1.2.3.4.5.6.7.8.9 и все

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   if (count == 4) {
//     break;
//   }
//   count++;
// } //цикл работает   0.1.2.3.4 и Underfined

//б) do while в отличие от while выполняет минимун один раз свое тело, а уже потом проверяет условие

// let count = 5;
// do {
//   console.log(count);
// } while (count > 7); //5 underfined

// let count = 10;
// do {
//   console.log(count);
//   count--;
// } while (count >= 7); //10 9 8

//в) for самый распространенный цикл, когда нужно исполнить конд несколько раз подряд
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// } //0 1 2 3 4 5 6 7 8 9 underfined

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// } //0 2 4 6 8 underfined

//г)for in/of

// let arr = [5, 7, 9, 1, 0];
// for (let i = 0; i < arr.length; i++) {//работа цикла for в массиве
//   console.log(arr[i] * 2);
// } //10 14 18 2 0 underfined

// let arr = [5, 7, 9, 1, 0];
// for (let item of arr) {
//   console.log(item);
// } //5 7 9 1 0 underfined

// let obj = {
//   name: "Eugene",
//   age: 44,
//   nubmer: 8565656756,
// };
// for (let key in obj) {
//   console.log(key);
// } //number age number

// let obj = {
//   name: "Eugene",
//   age: 44,
//   nubmer: 8565656756,
// };
// for (let key in obj) {
//   console.log(obj[key]);
// } //Eugene 44 8565656756 получаем значения всех ключей объекта

// let obj = {
//   name: "Eugene",
//   age: 44,
//   nubmer: 8565656756,
// };
// for (let key in obj) {
//   console.log(`Ключ ${key}, Значение ${obj[key]}`);
// } //Ключ name, Значение Eugene Ключ age, Значение 44 Ключ nubmer, Значение 8565656756

//д) foreach

// let arr = [5, 7, 9, 1, 0];
// arr.forEach(function (item, i, array) {
//(элемент индекс массив)
//   console.log(`Элемент : ${item} Индекс : ${i} Массив : ${array}`);
// }); //Элемент : 5 Индекс : 0 Массив : 5,7,9,1,0
//Элемент : 7 Индекс : 1 Массив : 5,7,9,1,0
//Элемент : 9 Индекс : 2 Массив : 5,7,9,1,0
//Элемент : 1 Индекс : 3 Массив : 5,7,9,1,0
//Элемент : 0 Индекс : 4 Массив : 5,7,9,1,0

// let people = [
//   { id: 1, name: "Ivan" },
//   { id: 2, name: "Maria" },
//   { id: 3, name: "Alex" },
//   { id: 4, name: "Olga" },
// ];
// let a = people.find(function (item) {
//   if (item.id == 3) return item;
// });
// console.log(a); //Object { id: 3, name: "Alex" } возвращает индекс  объекта

// let people = [
//   { id: 1, name: "Ivan" },
//   { id: 2, name: "Maria" },
//   { id: 3, name: "Alex" },
//   { id: 4, name: "Olga" },
// ];
// let a = people.findIndex(function (item) {
//   if (item.id == 3) return item;
// });
// console.log(a); //Object { id: 3, name: "Alex" } возвращает индекс  объекта

// let people = [
//   { id: 1, name: "Ivan" },
//   { id: 2, name: "Maria" },
//   { id: 3, name: "Alex" },
//   { id: 4, name: "Olga" },
// ];
// let a = people.filter(function (item) {
//   if (item.id == 3) return item;
// });
// console.log(a); //Object { id: 3, name: "Alex" } возвращает массив из элементов объекта

// let arr = [5, 7, 9, 1, 0];
// let newArr = arr.map(function (item) {
//   return item * 3;
// });
// console.log(newArr); //Array(5) [ 15, 21, 27, 3, 0 ] получаем новый массив

//Задача создать массив из четных чисел от 0 до 20
// let arr = [];
// for (let i = 0; i < 20; i += 2) {
//   arr.push(i);
// }
// console.log(arr); //Array(10) [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

// let arr = [];
// for (let i = 10; i > 0; i--) {
//   if (i % 3 == 0) {
//     arr.push(i);
//   }
//   console.log(arr);
// } //Array(10) [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.pow(i, 2));
}
console.log(arr); //Array(10) [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
