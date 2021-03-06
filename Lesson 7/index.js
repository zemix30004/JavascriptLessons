//Области видимости -определяет границы действия переменной:
//а)глобальные области видимости создаются в браузере в консоли переменные a,b,c
//б)локальные области видимости:
//пример л.о.в. №1 переменные а, с л.о.в №2 с переменной в. Здесь в   в локалке и глобалке не одно и тоже

let a //задали в глобальной области видимости глобальные переменные a,b
let b
function myFn() { 
	let b  // задали в локальной области видимости локальную переменную b
	a = true
	b = 10
   console.log(b)//10  //при вызове функции мы создаем локальную область видимости
}
myFn()
console.log(a) //true
console.log(b) //undefined


//Цепочка областей видимости

// const a = 5

// function myFn() {
// 	function innerFn() {
// 		console.log(a)  //5  на выводе консоли браузера//undefined потому, что функция myFn не находит функцию innerFn
// 	}
// 	innerFn()
// }
// myFn()


//Жизненный цикл переменных
let a
let b //1.объявление b в глобальной области видимости
function myFn() {//3.объявление b в области видимости функции
	let b
	a = true
	b = 10//4.если b объявлена, то присвоить ей значение 10
	console.log(b) //10 5. b имеет значение 10 в области видимости функции
	}
myFn()//2.вызов myFn()
console.log(a) //true
console.log(b) //underfined 6. b имеет все также значение underfined в глобалке

//Типв областей видимости
//а)Глобальная область видимости
//б)Область видимости функции
//в)область видимости блока-здесь переменные, объявленные
//внутри блока с помощью let и const имеют о.в,ограниченную этим блоком
function myFn() {

	a = true
	console.log(a)/true
	}
myFn()
console.log(a)//true тут в браузере автоматически объявлена переменная глобально, поэтому нет ошибки при выводе

//Правила работы с переменными
//1)Все переменные объявлять перед их использованием
//2)использовать const везде, где это возможно
//3)внутри функций не изменять переменные с внешних областей видимости


  //Строгий режим- запрещает использование необъявленных переменных

  'use strict'//єта строка должна біть в глобалке или локалке

  function myFn() {
	  a = true //Uncaught ReferenceError: assignment to undeclared variable a
	  console.log(a)
  }
  myFn()
  console.log(a)