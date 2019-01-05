const simpleSymbols = str => {
  const containsInvalidPattern = str.split('').some(findALetterNotSurroundedByPluses);

  return containsInvalidPattern ? false : true;
};

const findALetterNotSurroundedByPluses = (letter, index, letters) => {
  if (/[a-z]/i.test(letter)) {
    return letters[index - 1] !== '+' || letters[index + 1] !== '+';
  }

  return false;
};

module.exports = { simpleSymbols };