//Обработка ошибок кода JS
const fnWithError = () => {
  throw new Error("Some error");
};
fnWithError(); //выполнение кода остановится после появления ошибки Uncaught
console.log("Continue...");

//try/catch
try {
  //Выполнение блока кода
} catch (error) {
  //Этот блок выполняется в случае возникновенгия ошибок  в блоке try
}

const fnWithError = () => {
  throw new Error("Some error");
};
try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}
console.log("Continue..."); //Some error debugger eval code:8:11
//Continue...выполнение кода продолжиться ибо мы поймали ошибку
