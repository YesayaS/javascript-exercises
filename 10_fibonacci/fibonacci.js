const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  parseInt(number);
  if (number == 0 || number == 1) return 1;
  f0 = 0;
  f1 = 1;
  for (let i = 1; i < number; i++) {
    fib = f0 + f1;
    f0 = f1;
    f1 = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
