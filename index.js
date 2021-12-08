const colors = require("colors/safe");

let rangeBegin = +process.argv[2];
let rangeEnd = +process.argv[3];
let buffer;
let flag = false;
let currentColor = [colors.green, colors.yellow, colors.red];

if (checkInputData(rangeBegin, rangeEnd)) {
  isPrime(rangeBegin, rangeEnd);
}

function isPrime(rangeBegin, rangeEnd) {
  let k = 0;
  if (rangeBegin == 2) {
    console.log( currentColor[k](2) );
    k++;
  }
  if (rangeBegin % 2 == 0) {
    rangeBegin += 1;
  }
  for (let i = rangeBegin; i <= rangeEnd; i+=2) {
    for (let j = 2; j <= Math.ceil(i ** 0.5); j++) {
      if (!(i % j)) {
        buffer = '';
        break;
      }
      buffer = i;
    }
    if (buffer) {
      console.log(currentColor[k](buffer));
      flag = true;
      k++;
      if (k > 2) { k = 0; }
    }
  }
  if (!flag) {
    console.log(colors.red('Простых чисел в диапазоне нет.'));
  }
}

function checkInputData(rangeBegin, rangeEnd) {
  if ((+rangeBegin != +rangeBegin) || rangeBegin < 2 || (+rangeEnd != +rangeEnd) || rangeEnd < 2) {
    console.log(colors.red('Error! Следует вводить только числа >= 2!'));
    return
  } else if (rangeBegin >= rangeEnd) {
    console.log(colors.red('Error! Нижняя граница диапазона должна быть меньше верхней.'));
    return
  } else {
    return true
  }
}
