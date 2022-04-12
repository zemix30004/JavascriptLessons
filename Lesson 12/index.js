//Массивы-объекты с цифровыми именами свойств
const myArray = [1, 2, 3]; //первый способ задания массива
console.log(myArray); //[1,2,3]
const myArray2 = new Array(1, 2, 3); //второй способ задания массива с помощью нового экземпляра класса Array
console.log(myArray); //[1,2,3]
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)//length Это свойство массива а не метод

const myArray = [1, true, 'Eugene'] //создадим два массива идентичные по данным
undefined
myArray
(3) [1, true, 'Eugene']0: 11: true2: "Eugene"length: 3[[Prototype]]: Array(0)
myArray.length
3
const myArray2 = [1, true, 'Eugene']
undefined
myArray2
(3) [1, true, 'Eugene']

myArray === myArray2// при сравнении мы получаем false, потому что эти два массива объекты и 
//ссылаются на разные места памяти, где хранятся эти массивы. Поэтому они разные
false

const myArray3 = my Array
myArray === myArray3
true//здесь два массива одинаковы, ибо ссылаются на один и тот же объект


//Структура массивов
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)
//Сравним массив и объект
const myObject = {//Объект
	0:1,
	1:2,
	2:3,
	length:3
}
console.log(myObject)//{0:1.1:2.2:3,length:3}

const myArray = [1,2,3]//Массив
console.log(myArray)//[1,2,3]

//Чтение значений массива
const myArray = [1, true, 'a']
console.log(myArray)//[1,true,'a']
console.log(myArray[0])//1
console.log(myArray[0])//true
console.log(myArray.length)//3

//Порадок элементов в массиве важен, ибо каждый элемент имеет порядковый номер то бтшь индекс 0,1,2...

//Длина массива
const myArray = [1,2,3,4]
console.log(myArray)//[1,2,3,4]
console.log(myArray.length)//4

myArray[2]= 'abc'
console.log(myArray)//[1,2,'abc']
console.log(myArray.length)//'abc'

myArray[4]= true
console.log(myArray)//[1,2,'abc', 4 ,true]
console.log(myArray.length)//5



