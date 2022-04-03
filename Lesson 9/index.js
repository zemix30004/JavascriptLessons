//Конкатенация строк-соединение строк

// "Hello " + "World"; //"Hello World"

// const hello = "Hello";
// const world = "World";
// const greeting = hello + "" + world;
// console.log(greeting);//Hello world

//Шаблонные строки

const hello = "Hello";
const world = "World";
const greeting = `${hello} ${world}`;
// console.log(greeting);//Hello world

//Автоматическая конвертация типов данных
10 + "sdgsdg"; //'10sdgsdg' конвертация числа в строку
underfined + 12; //NaN
undefined + "12"; //'undefined12'

//Функциональные выражения
function(a,b) {//тут нет имени функции и сразу идут параметры, они анонимные, нельзя использовать автономно
	a = a + 1
	c = a + b
	return c
}
//Объявленные функции
function myFn(a,b) {//тут есть имя функции, а потом идут параметры
	a = a + 1
	c = a + b
	return c
}
