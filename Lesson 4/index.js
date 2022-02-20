//Мутации в JS
//Значения примитивных типов

// const a = 10
// let b = a
// b = 30
// console.log(a)//10 тут значение а не поменялось 
// console.log(b)//30 тут значение в поменялось

//Значения ссылочного типа
// const person = {
// 	name: 'Bob',
// 	age: 21
// }
// person.age = 22  //copy by value-копирование объекта
// person.isAdult = true
// console.log(person.age)//22 значение поменялось-мутация объекта, на который ссылается переменная
// console.log(person.isAdult)//true значение поменялось-мутация объекта, на который ссылается переменная

//Мутирование копий
// const person = {
// 	name: 'Bob',
// 	age: 21
// }
// const person2 = person//copy by reference-копирование ссылки
// person2.age = 26
// person2.isAdult = true

// console.log(person.age)//26
// console.log(person.isAdult)//true

//как создать копию обїекта и полностью избежать мутации 1 способ

// const person = {
// 	name: 'Bob',
// 	age: 25
// }
// const person2 = Object.assign({}, person)//новый объект сохраняет свойства объекта person
// person2.age = 26
// console.log(person2.age)//26
// console.log(person.age)//25


//как создать копию обїекта и полностью избежать мутации 2 способ

// const person = {
// 		name: 'Bob',
// 		age: 25
// 	}
// 	const person2 = {...person}//три точки это оператор разделения объекта на свойства
// 	person2.name = 'Alice'
// 	console.log(person2.name)//Alice
// 	console.log(person.name)//Bob

	//как создать копию обїекта и полностью избежать мутации 3 способ

	const person = {
		name: 'Bob',
		age: 25
	}
	const person2 = JSON.parse(JSON.stringify(person))// при этом ссылки на вложенный объект не сохраняются
	                             //все ссылки создадутся заново с новым объектом
	person2.name = 'Alice'
	console.log(person2.name)//Alice
	console.log(person.name)//Bob




