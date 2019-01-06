const letterChanges = str => {
  const newStr = str.replace(/[a-z]/g, convertToNextLetterInAlphabet);

  return newStr.replace(/a|e|i|o|u/g, convertToUppercase);
};

const convertToNextLetterInAlphabet = char => {
  return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
};

const convertToUppercase = char => char.toUpperCase();

module.exports = { letterChanges };
