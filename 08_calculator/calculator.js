const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sumArray = 0;
  array.forEach((num) => {
    sumArray += num;
  });
  return sumArray;
};

const multiply = function (array) {
  let mulArray = 1;
  array.forEach((num) => {
    mulArray *= num;
  });
  return mulArray;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  let fac = 1;
  for (let i = num; i > 0; i--) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
