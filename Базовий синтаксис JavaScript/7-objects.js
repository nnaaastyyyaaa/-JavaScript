'use strict';
function fn() {
  const obj1 = { name: 'Nastya' };
  let obj2 = { name: 'Maria' };
  obj1.name = 'Sonya'; //змінюємо властивість об'єкта а не значення константи
  obj2.name = 'Anya';
  //obj1 = {name: 'Lina'}; неможливо змінити значення константи
  obj2 =  { name: 'Katya' };
  return obj1, obj2;
}
console.log(fn());

module.exports = { fn };
