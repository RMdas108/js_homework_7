//Завдання 1. Варіант 1.
"use strict";
let time = new Date();
function zeroBefore(x){
  let j =  x < 10 ? '0'+String(x):x;
return j; 
 }
 function lastDigit(var_time){
  let ending;
if (var_time % 10 == 1 && var_time != 11){
  ending = 'у';
}
else if ((var_time % 10 >=2 && var_time % 10 <= 4) && (var_time < 10 || var_time > 20)){
   ending = 'и';
}
else{
  ending = '';
}
  
  return ending;
}

let currentTime = {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds(),
}; // Поточний час
let shiftTime = Object.assign({},currentTime);
let intervalSeconds = +prompt("Введіть будь-який інтервал у секундах..."); // Додаємо секунди
shiftTime.second += intervalSeconds;

  while (shiftTime.second >= 24 * 60 * 60){
    shiftTime.second -= 24 * 60 * 60;
  } 
  while (shiftTime.second >= 60 * 60){
    shiftTime.second -=  60 * 60;
    shiftTime.hour++;
  } 
  if (shiftTime.hour>=24){
    shiftTime.hour %=24;
  }
  while (shiftTime.second >= 60){
    shiftTime.second -= 60;
    shiftTime.minute++;
  } 
  if (shiftTime.minute>=60){
    shiftTime.minute %=60;
    shiftTime.hour++; 
  }
  
console.log(
  `Зараз «${zeroBefore(currentTime.hour)}:${zeroBefore(currentTime.minute)}:${zeroBefore(currentTime.second)}». 
Через ${intervalSeconds} секунд${lastDigit(intervalSeconds)} буде «${zeroBefore(shiftTime.hour)}:${zeroBefore(shiftTime.minute)}:${zeroBefore(shiftTime.second)}» `
);
//Завдання 1. Варіант 2.
 let currentTime_2 = new Date(); // Поточний час
function addSecondsToCurrentTime(secondsToAdd) {
  let newTime = new Date(currentTime_2.getTime() + secondsToAdd * 1000); // Додаємо секунди
  return newTime;
}

const secondsToAdd = +prompt('Введіть кількість секунд...')
const newTime = addSecondsToCurrentTime(secondsToAdd);

console.log(
  `Зараз «${zeroBefore(currentTime_2.getHours())}:${zeroBefore(currentTime_2.getMinutes())}:${zeroBefore(currentTime_2.getSeconds())}». 
Через ${secondsToAdd} секунд${lastDigit(secondsToAdd)} буде «${zeroBefore(newTime.getHours())}:${zeroBefore(newTime.getMinutes())}:${zeroBefore(newTime.getSeconds())}» `
);

//Завдання 2 і 3.
const hoursInput = +prompt('Введіть години:');
const minutesInput = +prompt('Введіть хвилини:');
const secondsInput = +prompt('Введіть секунди:');

const timeObject = {
  hours: hoursInput,
  minutes: minutesInput,
  seconds: secondsInput
};
function numComp(prop,num)
{if (prop >= num){
  prop %= num;
}
else if (isNaN(prop) || prop == null) {
  prop = String('0');
}
return zeroBefore(prop);
};
document.write(`<div>Введений Вами час: ${numComp(timeObject.hours,24)}:${numComp(timeObject.minutes,60)}:${numComp(timeObject.seconds,60)}.</div>`)


//Завдання 3.
const hoursInput_3 = +prompt('Введіть години:');
const minutesInput_3 = +prompt('Введіть хвилини:');
const secondsInput_3 = +prompt('Введіть секунди:');
document.write(`<div>Введений Вами час ${hoursInput_3} годин${lastDigit(hoursInput_3)}, 
${minutesInput_3} хвилин${lastDigit(minutesInput_3)}, ${secondsInput_3} секунд${lastDigit(secondsInput_3)} 
 у секундах становить <span style='color:red;'>${hoursInput_3*60*60+minutesInput_3*60+secondsInput_3}</span></div>`);