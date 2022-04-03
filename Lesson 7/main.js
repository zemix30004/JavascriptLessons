//Функции

// function printText() {
//ключевое слово название функции () { тело функции}
//   console.log("Hello"); //ничего не вЫведет
// }
// printText(); //для вывода на экран используют эту запись после } и будет выведено Hello

// function printText(name, age) {
//name age тут параметры функции
//   console.log("My name is '+name+', age: " + age); //ничего не вЫведет
// }
// printText(); //My name is undefined, age: undefined ибо тут не указаны параметры имя и возвраст

// function printText(name, age) {
//   //name age тут параметры функции
//   console.log("My name is '+name+', age: " + age);
// }
// printText("Peter", "17"); //My name is Peter, age: 17 теперь все выводит

// function printText(name, age) {
//   console.log("My name is '+name+', age: " + age);
// }
// printText("Peter", "17"); //My name is '+name+', age: 17
// printText("Andy", "30"); //My name is '+name+', age: 30
// printText("John", "25"); //My name is '+name+', age: 25 можно выводить много значений функции

// function printText(name, age) {
//   console.log("My name is " + name + ", age: " + age);
// }
// let name = "Peter";
// let age = 17;
// printText(name, age); //My name is Peter, age: 17 можно и так вывести имя и возвраст

// function printText(name, age) {
//   console.log("My name is " + name + ", age: " + age);
// }
// let name1 = "Peter";
// let age1 = 17;
// printText(name1, age1); //My name is Peter, age: 17  можно менять нумерацию и  вывести имя и возвраст

// function printText(name, age) {
//   return "Hello, My name is " + name + ", age: " + age;
// }
// let name1 = "Peter";
// let age1 = 17;
// console.log(printText("Peter", 17)); //и снова на выводе Hello, My name is Peter, age: 17

function printText(name, age) {
  return "Hello, My name is " + name + ", age: " + age;
}
let name1 = "Peter";
let age1 = 17;
let res = printText(name1, age1);
alert(res); //подтвердите действие Hello, My name is Peter, age: 17//

//если функция находится внутри данного объекта, она называется методом данного объекта hello()

// let obj = {
//   name: "Ivan",
//   age: 18,
//   hello() {
//     console.log(this.name); //с помощью такого метода объекта будет выводиться имя объекта
//   },
// };
// obj.hello(); //Ivan

let obj = {
  name: "Maria",
  age: 22,
  hello() {
    console.log("Меня зовут " + this.name); //с помощью такого метода объекта будет выводиться имя объекта
  },
};
obj.hello(); //Меня зовут Maria
