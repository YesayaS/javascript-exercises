const removeFromArray = function (inputArray, ...numbers) {
  numbers.forEach((number) => {
    index = inputArray.indexOf(number);
    if (index >= 0) {
      inputArray.splice(index, 1);
    }
  });
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
