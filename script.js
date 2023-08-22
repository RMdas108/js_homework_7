"use strict"
//Допоміжні функції
function zeroBefore(x) {
  // Нулі
  let j = x < 10 ? "0" + String(x) : x;
  return j;
}
function lastDigit(var_time) {
  // Закінчення для часу
  let ending;
  if (var_time % 10 == 1 && var_time != 11) {
    ending = "у";
  } else if (
    var_time % 10 >= 2 &&
    var_time % 10 <= 4 &&
    (var_time < 10 || var_time > 20)
  ) {
    ending = "и";
  } else {
    ending = "";
  }
  return ending;
}
//Завдання 1. Варіант 1.
let time = new Date();
let currentTime = {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
}; // Поточний час
let shiftTime = Object.assign({}, currentTime);
const intervalSeconds = +prompt("Введіть будь-який інтервал у секундах..."); // Додаємо секунди
shiftTime.second += intervalSeconds;

while (shiftTime.second >= 24 * 3600) {
  shiftTime.second -= 24 * 3600;
}
while (shiftTime.second >= 3600) {
  shiftTime.second -= 3600;
  shiftTime.hour++;
}

while (shiftTime.second >= 60) {
  shiftTime.second -= 60;
  shiftTime.minute++;
}
if (shiftTime.minute >= 60) {
  shiftTime.minute %= 60;
  shiftTime.hour++;
}
if (shiftTime.hour >= 24) {
  shiftTime.hour %= 24;
}
console.log(`Завдання 1. Вариант 1. \nЗараз «${time}».
Через ${intervalSeconds} секунд${lastDigit(intervalSeconds)} буде «${zeroBefore(
  shiftTime.hour
)}:${zeroBefore(shiftTime.minute)}:${zeroBefore(shiftTime.second)}»`);

//Завдання 1. Варіант 2.
 let currentTime_2 = new Date(); // Поточний час
 const secondsToAdd = +prompt("Введіть кількість секунд...");
let newTime = new Date(currentTime_2.getTime() + secondsToAdd * 1000); // Додаємо секунди

console.log(`Завдання 1. Вариант 2. \nЗараз «${currentTime_2}».
Через ${secondsToAdd} секунд${lastDigit(secondsToAdd)} буде «${zeroBefore(
  newTime.getHours()
)}:${zeroBefore(newTime.getMinutes())}:${zeroBefore(
  newTime.getSeconds()
)}»`);

//Завдання 2.
let hoursInput = +prompt("Введіть години:");
while (hoursInput > 24 || hoursInput < 0) {
  hoursInput = +prompt("Введіть години:");
}
if (isNaN(hoursInput) || hoursInput == null) {
  hoursInput = String("0");
}
let minutesInput = +prompt("Введіть хвилини:");
while (minutesInput > 60 || minutesInput < 0) {
  minutesInput = +prompt("Введіть хвилини:");
}
if (isNaN(minutesInput) || minutesInput == null) {
  minutesInput = String("0");
}
let secondsInput = +prompt("Введіть секунди:");
while (secondsInput > 60 || secondsInput < 0) {
  secondsInput = +prompt("Введіть секунди:");
}
if (isNaN(secondsInput) || secondsInput == null) {
  secondsInput = String("0");
}
console.log(
  `Завдання 2.\n Введений Вами час: ${zeroBefore(hoursInput)}:${zeroBefore(minutesInput)}:${zeroBefore(secondsInput)}.`
)

//Завдання 3.
const hoursInput_3 = +prompt("Введіть години:");
const minutesInput_3 = +prompt("Введіть хвилини:");
const secondsInput_3 = +prompt("Введіть секунди:");
console.log(`Завдання 3.\nВведений Вами час ${hoursInput_3} годин${lastDigit(
  hoursInput_3
)},
${minutesInput_3} хвилин${lastDigit(minutesInput_3)}, ${secondsInput_3} секунд${lastDigit(secondsInput_3)} у секундах становить ${hoursInput_3 * 60 * 60 + minutesInput_3 * 60 + secondsInput_3
 }`);

// Завдання 4.
let time1 = new Date();
time1.setHours(+prompt("Введіть години для 1-го часу..."));
time1.setMinutes(+prompt("Введіть хвилини для 1-го часу..."));
time1.setSeconds(+prompt("Введіть секунди для 1-го часу..."));

let time2 = new Date();
time2.setHours(+prompt("Введіть години для 2-го часу..."));
time2.setMinutes(+prompt("Введіть хвилини для 2-го часу..."));
time2.setSeconds(+prompt("Введіть секунди для 2-го часу..."));
;
let diff ={value:0,hour:0,minute:0,second:0};
diff.value = Math.abs(Math.round((time2-time1)/1000));
diff.second = diff.value;
while (diff.second >= 3600) {
   diff.second-= 3600;
    diff.hour++;
  }
  while (diff.second >= 60) {
    diff.second -= 60;
    diff.minute++;
}
console.log(`Завдання 4.\n${diff.value} секунд${lastDigit(diff.value)} становить ${diff.hour} годин${lastDigit(diff.hour)}, ${diff.minute} хвилин${lastDigit(diff.minute)}, ${diff.second} секунд${lastDigit(diff.second)}`);