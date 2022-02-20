// console.log("Text
// on 2 line")//выдает ошибку с помощью обратных кавычек

// console.log(`Text
// on 2 line`)//Text
// on 2 line не выдает ошибку

// let a = 7; 1 способ
// console.log(`Text
// on 2 line ${a}`)// on 2 line 7

// let a = 7; //2 способ
// console.log("Text\non 2 line "+a)// on 2 line 7
//Text
//on 2 line 7


// Math.random()//выбор случайных чисел
// 0.21627362275586925
// Math.random()
// 0.5413096965551829
// Math.random()
// 0.9659789804566838
// Math.max(3,4,5,6) //максимальное значение числа
// 6
// Math.pow(12,56) //12 в 56 степени
// 2.717376270889602e+60
// Math.sqrt(25) //квадратній корень из числа
// 5
// Math.floor(3.9)//округление в меньшую сторону
// 3
// Math.ceil(3.8) //округление в большую сторону
// 4
// 4.658565.toFixed(2)//округление до 2 знака после запятой
// '4.66'
// "4"+ 23//строка превращается в число
// '423'
// 4 + 23//число плюс число
// 27

//код проверки является данная запись числом
function isNumber(n) {
	return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

console.log(isNumber(5));
//true
console.log(isNumber("5"));
//true
console.log(isNumber("5.45"));
//true
console.log(isNumber("5x"));
//false

//код проверки входа в диапазон  случайного числа
function randomInteger(min,max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);	
}
console.log(randomInteger(3,9));
//4
console.log(randomInteger(1,3))
//2