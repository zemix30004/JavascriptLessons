//Классы в ООП
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  myInfo() {
    console.log("Меня зовут " + this.name + ", мне " + this.age + "лет");
  }
}
let u1 = new User("Peter", 21);
let u2 = new User("Kate", 19);
let u3 = new User("Masha", 20);
// u1
// User {name: 'Peter', age: 21}
// u1.name
// 'Peter'
// u2.age
// 19

class User {
  admin = true;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  myInfo() {
    console.log("Меня зовут " + this.name + ", мне " + this.age + "лет");
  }
}
let u1 = new User("Peter", 21);
let u2 = new User("Kate", 19);
let u3 = new User("Masha", 20);

// u1
// User {admin: true, name: 'Peter', age: 21}

class User {
  admin = true;
  constructor(name, age, admin = false) {
    this.name = name;
    this.age = age;
    this.admin = admin;
  }
  myInfo() {
    console.log("Меня зовут " + this.name + ", мне " + this.age + "лет");
  }
}
let u1 = new User("Peter", 21);
let u2 = new User("Kate", 19);
let u3 = new User("Masha", 20);

// u1

// User {admin: false, name: 'Peter', age: 21}

class User {
  admin = true;
  constructor(name, age, admin = false) {
    this.name = name;
    this.age = age;
    this.admin = admin;
  }
  myInfo() {
    console.log("Меня зовут " + this.name + ", мне " + this.age + "лет");
    if (this.admin == true) {
      console.log("Я админ");
    }
  }
}
class Moderator extends User {
  //этот класс идет от родительского User
  addPost() {}
}
let u1 = new User("Peter", 21);
let u2 = new User("Kate", 19, (admin = true));
let u3 = new User("Masha", 20);
let m1 = new Moderator("Ivan", 34, true); //m1
// Moderator {admin: true, name: 'Ivan', age: 34}
// admin: true
// age: 34
// name: "Ivan"
// [[Prototype]]: User
// m1.myInfo()
// VM157:9 Меня зовут Ivan, мне 34лет
// VM157:11 Я админ
// undefined
// m1.addPost()

class User {
  admin = true;
  constructor(name, age, admin = false) {
    this.name = name;
    this.age = age;
    this.admin = admin;
  }
  myInfo() {
    console.log("Меня зовут " + this.name + ", мне " + this.age + "лет");
    if (this.admin == true) {
      console.log("Я админ");
    }
  }
}
class Moderator extends User {
  constructor(name, age, admin = false, moderator = true) {
    super(name, age, (admin = false));
    this.moderator = moderator;
  }
  addPost() {
    console.log("New Post");
  }
  myInfo() {
    super.myInfo();
    console.log("Я модератор");
  }
}
let u1 = new User("Peter", 21);
let u2 = new User("Kate", 19, (admin = true));
let u3 = new User("Masha", 20);
let m1 = new Moderator("Ivan", 34, true);
// m1.myInfo()
// VM258:9 Меня зовут Ivan, мне 34лет
// VM258:11 Я админ
// VM258:21 Я модератор

// m1
// Moderator {admin: false, name: 'Ivan', age: 34, moderator: true}
