//Почти все сущности в js это объекты, которые состоят из свойст и значений
console.log('Hello, world!')
//тут console это объект, log это его свойство, а 'Hello, world!' это значения свойства
//Переменные это область памяти, в которой может что-то храниться, какие-то данные
'adc',124, a = 2(присваивания),c++(с побочными действиями) a =>b ||c == d, myFunction(c,d)//Выражения
 PascalCase, DB_DATABASE, camelCase//Имена переменных
 const, let, var//Объявления перменных а потом уже присваивание  const a, a=20
 const a = 10(number), const b = 'Hello'(string)//тип переменной является типом присвоенного значения
number, string, boolean, null, underfined, symbol//типы значения переменной примитивные и ссылочный
string a = 'abc', int b = 3, //статическая типизация данных
a = 'abc', b = 3, //динамическая типизация данных, что характерно для язіка js









//Переменные
const a = () => {
	console.log('Hey there')//const для объявления переменных
}
a()
a = 10//TypeError: Assignment to constant variable
a()

// function a() {
// 	console.log('Hey there')//Динамическая типизация
// }
// a()//Hey there
// a = 10
// a()//TypeError: a is not a function
