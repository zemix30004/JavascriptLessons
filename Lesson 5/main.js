//Условия

//  alert("Текстовая строка")// 1) диалоговое окно с всплывающим текстом, треюующим нажать ОК
// prompt("Введите ваш возвраст") // 2)диалоговое окно с требованием ввести возвраст и нажать ОК

// let age = prompt("Введите ваш возвраст")

// alert("Мой возвраст " + age) //вводим 44 и ОК, если нажать ОТМЕНА будет  значение null

// let age = prompt("Введите ваш возвраст")
// if(age !=null) {
// 	alert("Мой возвраст " + age) //в консоли при выводе пишет сообщение 44
// } else {
// 	alert("Вы нажалт отмена")
// }

// if(confirm("Удалить ваш аккаунт?")) {// 3) Ок или Отмена выбираем
//    alert("Удалено")  //если нажать Ок будет отменено
// } else {
// 	alert("Отменено")  //в противном случае если нажать отмена, то будет отменено
// }

// confirm("Удалить ваш аккаунт?") ? alert("Удалено") : //тернарный оператор,заменяет все в п.п.17-21
// alert("Отменено")

	// let age = prompt("Введите ваш возвраст")  //1 способ
	// if(age < 18) {
	// 	alert("Мой возвраст меньше 18 лет") 
	// } else if(age > 18) {
	// 	alert("Мой возвраст больше 18 лет")
	// } else if(age == 18) {
	// 	alert("Мне 18 лет")
	// }

	// let age = prompt("Введите ваш возвраст")  //2 способ
	// if(age < 18) {
	// 	alert("Мой возвраст меньше 18 лет") 
	// } else if(age > 18) {
	// 	alert("Мой возвраст больше 18 лет")
	// } else {
	// 	alert("Мне 18 лет")
	// }

	// let age = prompt("Введите ваш возвраст")

	// switch(true) {    //3 способ
	// 	case age > 18:
	// 	alert("Мне больше 18 лет");
	// 	break;
	// 	case age < 18:
	// 	alert("Мне меньше 18 лет");
	// 	break;
	// 	default:
	// 		alert("Мне 18 лет");
	// }

		let age = prompt("Введите ваш возвраст")

	switch(true) {    //3 способ
		case age > 18:
		alert("Мне больше 18 лет");
		break;
		case age < 18 && age > 0:
		alert("Мне меньше 18 лет");
		break;
		case age == 18:
			alert("Мне 18 лет")
		break;
		default:
		alert("Не правильный возраст");
	}