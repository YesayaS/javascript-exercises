const palindromes = function (inputString) {
  let punctuation = /[\.,?!]/g;
  inputString = inputString
    .replace(punctuation, "")
    .replace(/\s/g, "")
    .toLowerCase();
  console.log(inputString);
  return inputString === inputString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
