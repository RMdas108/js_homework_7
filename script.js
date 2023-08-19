//Завдання 1. Варіант 1.
"use strict";
let time = new Date();
function zeroBefore(x){
  let j =  x < 10 ? '0'+String(x):x;
return j; 
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
  `Зараз «${currentTime.hour}:${zeroBefore(currentTime.minute)}:${zeroBefore(currentTime.second)}». Через ${intervalSeconds} секунд буде «${shiftTime.hour}:${zeroBefore(shiftTime.minute)}:${zeroBefore(shiftTime.second)}» `
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
  `Зараз «${currentTime_2.getHours()}:${zeroBefore(currentTime_2.getMinutes())}:${zeroBefore(currentTime_2.getSeconds())}». 
  Через ${secondsToAdd} секунд буде «${newTime.getHours()}:${zeroBefore(newTime.getMinutes())}:${zeroBefore(newTime.getSeconds())}» `
);
