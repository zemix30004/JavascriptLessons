//Методы-свойства обЪекта, значения которого функция,которые содерждат функции

// const myCity = {
// 	city:'New York',
// 	cityGreeting: function() {//круглые скобки для оптиональных параметров
// 		console.log('Greetings!!')
// 	}
// }
myCity.city //доступ к значению свойства тут скобок нет как у метода
myCity. cityGreeting()//вызов объекта с помощью круглых скобок 
//Greetings!!

//JSON-javascript object notation, это формат обмена данными между компами в нете
{
	"userId": 1,
	"id": 1,
	"title": "Test title",
	"status": {
		"completed": false//все свойства между двойными кавычками
	}
}
JSON.stringify()//с помощью обратного метода прасинга превращаем в строку js-объект

//{"userId":1, "id":1, "title":"Test title", "status":{"completde":false}}
// JSON.parse()//с помощью парсинга мы вращаем строку в js-Объект
//пример перевода JSON объекта в строку и обратно
const post = {
    title: 'My post',
    likesQty: 5
}
undefined

post
{title: 'My post', likesQty: 5}
JSON
JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ}
parse: ƒ parse()
stringify: ƒ stringify()
Symbol(Symbol.toStringTag): "JSON"
[[Prototype]]: Object
JSON.stringify(post)
'{"title":"My post","likesQty":5}'//JSON объект стрингифнули в JSON строка
const postStringified = JSON.stringify(post)
undefined
m=_b,_tp:643 Загрузка XHR завершена: POST (https://play.google.com/log?format=json&hasfast=true&authuser=0).
JSON.parse(postStringified)
{title: 'My post', likesQty: 5}//JSON  строку распарсили в JSON объект
likesQty: 5
title: "My post"
[[Prototype]]: Object