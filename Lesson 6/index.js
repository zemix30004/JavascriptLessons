//Передача значения по ссылке в функциях
// const personOne = {
// 	name: 'Bob',
// 	age: 21
// }
// function increasePersonAge(person) {
// 	person.age += 1
// 	return person
// }
// increasePersonAge(personOne)
// console.log(personOne.age)//22 копия не была создана, мы мутировали внешний объект по ссылке
//внутри функции не рекомендуется мутировать внешний объект

//Внутри функции можно создавать копии объектов

const personOne = {
	name: 'Bob',
	age: 21
}
function increasePersonAge(person) {
	const updatedPerson = Object.assign({}, person)
	updatedPerson.age += 1
	return updatedPerson
}
const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)//21
console.log(updatedPersonOne.age)//22 объект personOne не изменился, изменилась тольео его копия

//Callback функции-
// function anotherFunction() {
// 	//Действия
// }
// function fnWihtCallback(callbackFunction) {//в теле этой функции вызывается коллбэк функция
// 	callbackFunction()
// }
// fnWihtCallback(anotherFunction)//без коллбэк функции энозерфункция не вызовется

function printMyName() {
	console.log('Eugene')
}
console.log('Start')
setTimeout(printMyName, 1000)//тут мы бередем только название функции printName, но не вызываем ее
//через 1000 миллисекунд
//возможная ситуация, когда одна коолбэк функция вызывает другую коллбэк функцию

//Правила работы с функциями
//1)называйте функции исходя из выполняемых задач
//2)одна функция должна выполнять одну задачу
//3)не рекомендуется изменять внешние относительно функции переменные
//4)функцию можно вызывать многократно с разными вводными данными