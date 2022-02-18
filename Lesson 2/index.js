//Объекты содержат свойства с функциями это все методы объектов
//Объекты это набор свойств имя:значение, тип значений и переменных
// const myCity = {
// 	city: 'New York',
// 	popular: true,
// 	country: 'USA'
// }
// const myCity = {
// 	country: 'USA',
// 	popular: true,
// 	city: 'New York',
// }//Порядок свойств не имеет значение можна комбирировать

// console.log(myCity.city)//'New York' получение значения того или иного свойства
// console.log(myCity.popular)//true    получение значения того или иного свойства
// //.точечная запись Dot notation


// const myCity = {
// 	city: 'New York'
// }
// myCity.city = 'Las Vegas'
// console.log(myCity)//{ city: 'Las Vegas' } Изменение значений свойств объекта


// const myCity = {
// 		city: 'New York'
// 	}
// 	myCity.popular = true
// 	console.log(myCity)//{ city: 'New York', popular: true 
// 	myCity.country = 'USA'
// 	console.log(myCity)//{ city: 'New York', popular: true, country: 'USA' }
// 	//Создание новых свойств объекта
// 	//Мы не меняем значение переменной, а меняем сам объект с помощью ссылки

// const myCity = {
// 	city:'New York',
// 	popular: true,
// 	country: 'USA'
// }
// delete myCity.country//удаление свойства объекта
// console.log(myCity)//{ city: 'New York', popular: true }
// delete myCity.popular//удаление свойства объекта
// console.log(myCity)//{ city: 'New York'}
// delete myCity.city//удаление свойства объекта
// console.log(myCity)//{}

// const myCity = {
// 	city: 'New York'
// }
// myCity['popular'] = true// добавление свойства с помощью квадратных скобок Bracket Notation
// console.log(myCity)//{ city: 'New York', popular: true }

// const countryPropertyName = 'country'//в случае добавления значения совпадающего с названием свойства
// myCity[countryPropertyName] = 'USA'//используют квадратные скобки
// console.log(myCity)//{ city: 'New York', popular: true, country: 'USA' }


// const myCity = {
// 	city: 'New York',//вложенность в объект свойст 
// 	info: {
// 		isPopular:true,
// 		country: 'USA'
// 	}
// }
// console.log(myCity.info.isPopular)//true
// delete myCity.info['isPopular']//удаление вложенного свойства комбинированной записи
// console.log(myCity)//{ city: 'New York', info: { country: 'USA' } }


// const nameUser = 'Eugene'
// const postsQty = 23

// const userProfile = {
// 	name: nameUser,       //использование переменных при создании новых объектов
// 	postsQty: postsQty,
// 	hasSignedAgreement: false
// }

// const nameUser = 'Eugene'
// const postsQty = 23

// const userProfile = {
// 	nameUser,     //использование переменных при создании новых объектов
// 	postsQty,    //сокпащенная запись в предыдущем примере
// 	hasSignedAgreement: false
// }

//Глобальные объекты:
// 1)window(веб-браузеры)
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// 0: Window {window: Window, self: Window, location: Location, closed: false, frames: Window, …}

// 2)global(node.js)
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
// },
// queueMicrotask: [Function: queueMicrotask],
// clearImmediate: [Function: clearImmediate],
// setImmediate: [Function: setImmediate] {
//   [Symbol(nodejs.util.promisify.custom)]: [Getter]
// }
// }

// 3)globalThis//унифицированный глобальный объект

//Свойства глобальных объектов:
1)console
//console.log(1456)
2)window.console
// VM278:1 1456
// undefined
// window.console.log(1456)
// VM354:1 1456
3)global.console
// VM659:1 Uncaught ReferenceError: global is not defined
//     at <anonymous>:1:1
4)globalThis.console
//1456
