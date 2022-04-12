//ООП-основным здесь является наследование от базового объекта к дочерним, в которых будет что-то от базового но и что-то новое
let admin = {
  ryles: 777,
};
let user = {
  name: "Ivan",
  age: 20,
  __proto__: admin, //user наследуется от admin, а admin наследуется от Object
}; //{name: 'Ivan', age: 20}
// age: 20
// name: "Ivan"
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (…)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
// length: 1
// name: "set __proto__"
// arguments: (…)
// caller: (…)
// [[Prototype]]: ƒ ()
// [[Scopes]]: Scopes[0]
user.ryles; //777
user.toString(); //'[object Object]'

let admin = {
  ryles: 777,
};
function User(name, age) {
  this.name = name;
  this.age = age;
  this.__proto__ = admin;
}
let u1 = new User("Peter", 21); //создаем новый объект при помощи функции конструктора
u1; //User {nmae: 'Peter', age: 21}
// age: 21
// nmae: "Peter"
// [[Prototype]]: Object

// let admin = {
//   ryles: 777,
// };
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.__proto__ = admin;
// }
// let u1 = new User("Peter", 21); //при помощи одной функции создали три разных объекта
// let u2 = new User("John", 31);
// let u3 = new User("Kate", 23);
// u1
// User {name: 'Peter', age: 21}
// u2
// User {name: 'John', age: 31}
// u3
// User {name: 'Kate', age: 23}
// u4

let admin = {
  rules: 777,
  isAdmin() {
    console.log("Я админ, мои права " + this.rules);
  },
};
function User(name, age) {
  this.name = name;
  this.age = age;
  this.__proto__ = admin;
}
let u1 = new User("Peter", 21);
let u2 = new User("John", 31);
let u3 = new User("Kate", 23);
//u1.isAdmin()
//Я админ, мои права 777

let admin = {
  rules: 777,
  isAdmin() {
    console.log("Я админ " + this.name + " мои права " + this.rules);
  },
};
function User(name, age) {
  this.name = name;
  this.age = age;
  this.__proto__ = admin;
}
let u1 = new User("Peter", 21);
let u2 = new User("John", 31);
let u3 = new User("Kate", 23);

undefined;

//u1.isAdmin()
//Я админ Peter мои права 777

//u2.isAdmin()
//Я админ John мои права 777
