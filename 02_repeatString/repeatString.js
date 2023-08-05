const repeatString = function (stringInput, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }
  return stringInput.repeat(repeat);
};

// Do not edit below this line
module.exports = repeatString;
