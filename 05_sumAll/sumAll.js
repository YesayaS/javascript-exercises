const sumAll = function (startNumber, endNumber) {
  if (
    startNumber < 0 ||
    endNumber < 0 ||
    typeof startNumber != "number" ||
    typeof endNumber != "number"
  ) {
    return "ERROR";
  }
  if (startNumber > endNumber) {
    [startNumber, endNumber] = [endNumber, startNumber];
  }
  return ((endNumber - startNumber + 1) / 2) * (startNumber + endNumber);
};

// Do not edit below this line
module.exports = sumAll;
