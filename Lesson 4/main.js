//Объекты в отличие от массивов  имеют строковые значения
//{""key1:99} -тут первое ключ-строковый обязательно и значение любого типа 99

// let obj = {}//пустой объект, созданный с помощью фигурных скобок
let obj = {
	"color": "Tomato",
	"numbers":["8888", "7777"],
	"checked": true
}
obj["color"] //"Tomato" на выводе в консоли первый способ записи
obj.color //"Tomato" на выводе в консоли Это второй способ записи

obj["numbers"][1] //7777 на выводе в консоли первый способ записи
obj.numbers[1] //7777 на выводе в консоли Это второй способ записи

Object.keys(obj) //Array(3) [ "color", "numbers", "checked" ]
// ​
// 0: "color"
// ​
// 1: "numbers"
// ​
// 2: "checked"
// ​
// length: 3
// ​Получаем массив из всех возможных ключей данного объекта

obj["name"] = "Ivan" //на выводе  в консоли "Ivan"
obj //Object { color: "Tomato", numbers: (2) […], checked: true, name: "Ivan" }

//Однотипные объекты мы передаем в массив и получается массив объектов

let obj = [
	{
		"color": "Tomato",
		"numbers":["8888", "7777"],
		"checked": true
	},
	{
		"color": "Green",
		"numbers":["11867", "23923"],
		"checked": false
	},
   {
		"color": "Blue",
		"numbers":["345", "879"],
		"checked": true
	},

] //На выводе в консоли 
// Array(3) [ {…}, {…}, {…} ]
// ​
// 0: Object { color: "Tomato", numbers: (2) […], checked: true }
// ​
// 1: Object { color: "Green", numbers: (2) […], checked: false }
// ​
// 2: Object { color: "Blue", numbers: (2) […], checked: true }
// ​
// length: 3
// ​
// <prototype>: Array []