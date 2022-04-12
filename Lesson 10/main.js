//Дата и время
let a = new Date();
console.log(); //Date Thu Apr 07 2022 18:00:24 GMT+0300 (за східноєвропейським літнім часом)
let a = new Date(50000);
console.log(a); //Date Thu Jan 01 1970 03:00:50 GMT+0300 (за східноєвропейським стандартним часом)
let a = new Date("2015-05-25T10:51:12.941");
console.log(a); //Date Mon May 25 2015 10:51:12 GMT+0300 (за східноєвропейським літнім часом)
console.log(Date.parse("2015-05-25T10:51:12.941")); //1432540272941;
let a = new Date(2015, 6, 21, 10, 51, 54, 450);
console.log(a); //Date Tue Jul 21 2015 10:51:54 GMT+0300 (за східноєвропейським літнім часом)
let a = new Date(2015, 6, 21, 10, 51, 54, 450);
console.log(a.getFullYear()); //2015
console.log(a.getMonth()); //6
console.log(a.getDate()); //21
console.log(a.getHours()); //10
console.log(a.getMinutes()); //51
console.log(a.getSeconds()); //54
console.log(a.getMilliseconds()); //450
console.log(a.getTime()); //
console.log(a.getTimezoneOffset()); //-180
let a = new Date(2016, 1, 32); //Date Thu Mar 03 2016 00:00:00 GMT+0200 (за східноєвропейським стандартним часом)
console.log(a);
let a = new Date(2016, 1, 28);
a.setDate(a.getDate() + 2);
console.log(a); //Date Tue Mar 01 2016 00:00:00 GMT+0200 (за східноєвропейським стандартним часом)
let a = new Date(2016, 1, 28);
console.log(+a); //1456610400000
let a = +new Date();
for (let i = 0; i < 100; i++) {
  console.log(0);
}
let b = +new Date();
console.log(b - a); //27
let a = Date.now(new Date());
for (let i = 0; i < 1000; i++) {
  console.log(0);
}
let b = Date.now(new Date());
console.log(b - a); //124
let options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
console.log(a.toLocaleString("ru", options)); //среда, 31 декабря 2014 г. от Рождества Христова, 12:30:00

let a = new Date(2014, 11, 31, 12, 30, 0);
let options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
};
console.log(a.toLocaleString("en-US", options)); //Wednesday, December 31, 2014 Anno Domini

let a = new Date(2014, 11, 31, 12, 30, 0);
console.log(a.toTimeString());
let options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
};
console.log(a.toLocaleString("en-US", options)); //12:30:00 GMT+0200 (за східноєвропейським стандартним часом) debugger eval code:2:9
Wednesday, December 31, 2014 Anno Domini
