'use strict';
const square = (x) => x * x;
const cube = (x) => x ** 3;
const average = (a, b) => (a + b) / 2;
function calculate() {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    result.push(average(square(i), cube(i)));
  }
  return result;
}
console.log(calculate());

module.exports = { square, cube, average, calculate };
