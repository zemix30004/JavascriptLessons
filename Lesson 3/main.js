//Массивы

let arr = [5,2,"STRL", true]//вид массива с разнотипными элементами
undefined
arr
(4) [5, 2, 'STRL', true]
0: 5
1: 2
2: "STRL"
3: true
length: 4
[[Prototype]]: Array(0)

arr.length//выводим длину массива в количестве элементов
4
arr[2]
'STRL'
arr[2] ="Hello"//меняем значение второго индекса
'Hello'
arr
(4) [5, 2, 'Hello', true]//выводим весь массив с новым значением
0: 5
1: 2
2: "Hello"
3: true
length: 4
[[Prototype]]: Array(0)

arr[4] = 56
56
arr
(5) [5, 2, 'Hello', true, 56]//добавляем новы элемент с индексом 4

(4) [5, 2, 'STRL', true]
arr[arr.length-1]//получаем элемент под индесом 3 true
true
arr[arr.length]//выводит ошибку ибо всего элементов 4
undefined

arr.splice(1,1)//удаление конкретного элемента из массива
[2]0: 2length: 1[[Prototype]]: Array(0)
arr
(3) [5, 'STRL', true]

arr.splice(1)//удаление всех элементов начиная с 1 индекса
(2) ['STRL', true]
arr
[5]//останеться один элемент 5

arr.splice(1,0, 7,5,"Text")//добавляем несколько элементов после цифры 5
[]
arr
(4) [5, 7, 5, 'Text']//уже види четыре элемента

arr.splice(2,1,"New String")//удаляем элемент с индексом 2 и добавляем там же New String тоесть заменяем

arr.splice(2,1,"New Text", true)//заменяем New String на New Test и дальше добавляем true
['New String']
arr
(5) [5, 7, 'New Text', true, 'Text']
[5]
arr
(4) [5, 7, 'New String', 'Text']

arr.splice(-1,0,"Add element")//добавить предпоследним элемент Add element
[]
arr
(6) [5, 7, 'New Text', true, 'Add element', 'Text']

arr.splice(0,3)//вывод на экран всех элементов массива в диапазоне индекса от 0 до 3

(3) [5, 7, 'New Text']

arr.slice(-1)//вывод последнего элемента массива
['Text']

arr.slice(-2)//вывод последних двох элементов массива
(2) ['New String', 'Text']

arr.includes("Text")//выводит если находит существующий элемент true
true
arr.includes("text")//выводит если не находит существующий элемент false
false

arr.reverse()//метод реверс возвращает масси с элементами в обратном порядке
(4) ['Text', 'New String', 7, 5]

"Ivan, Petr, Sasha".split()//метод сплит для определения массива
['Ivan, Petr, Sasha']
"Ivan, Petr, Sasha".split(", ")
(3) ['Ivan', 'Petr', 'Sasha']
0: "Ivan"
1: "Petr"
2: "Sasha"
length: 3
[[Prototype]]: Array(0)

"Eugene".split()//метод сплит для определения массива имя целиком
['Eugene']0: "Eugene"length: 1[[Prototype]]: Array(0)
"Eugene".split('')//метод сплит для определения массива имя по буквам в массиве
(6) ['E', 'u', 'g', 'e', 'n', 'e']
              //ОЧЕРЕДЬ
arr.shift()//вынимаем первый элемент массива из массива пятерку
5
arr
(3) [2, 'STRL', true]//теперь в структуре все сдвинулось влево пятерки уже нет

arr.push(7)//добавляем новый элемент в массив
4//выводит количество элементов в массиве
arr
(4) [2, 'STRL', true, 7]//теперь видим 7 последним в массиве

arr.pop()//вынимаем последнее значение семерку
7
arr
(3) [2, 'STRL', true]//семерки уже нет  и стало три эелемента

arr.unshift(9)//добавить первым элементом число 9
4
arr
(4) [9, 2, 'STRL', true]//первый элемент девятка а число элементов 4

              //Два массива
let arr = [9, 2, 'STRL', true]
let arr2 = [1,2,3]

let arr = [9, 2, 'STRL', true]
undefined
arr
(4) [9, 2, 'STRL', true]
let arr2 = [1,2,3]
undefined
arr2
(3) [1, 2, 3]
arr.concat(arr2)//конкатенация массивов
(7) [9, 2, 'STRL', true, 1, 2, 3]

let arr3 = arr.concat(arr2)//определение нового третьего массива
undefined
arr3
(7) [9, 2, 'STRL', true, 1, 2, 3]

arr.indexOf('STRL')//получение индекса определеного элемента
2

arr.join()//объединение всех элементов массива в строку
'9,2,STRL,true'
arr.join("")//объединение всех элементов массива в строку без запятых
'92STRLtrue'
arr.join("-")//объединение всех элементов массива в строку с дефисами
'9-2-STRL-true'
arr.join("/")//объединение всех элементов массива в строку со слешем
'9/2/STRL/true'

let matrix = [//создаем  три массива внутри массива
	[1,2,4],
	[4,0,5],
	[3,7,1]
	]
undefined
matrix
(3) [Array(3), Array(3), Array(3)]
0: (3) [1, 2, 4]
1: (3) [4, 0, 5]
2: (3) [3, 7, 1]
length: 3
[[Prototype]]: Array(0)

matrix[1][2]//чтобы получить 5 нужно ввести сперва индекс номера подмассива, а потом индекс номера элемента в нем 
5