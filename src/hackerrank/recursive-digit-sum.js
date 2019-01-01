const superDigit = (number, repeats = 1) => {
  number = repeatNumber(number, repeats);

  if (number.length === 1) return Number(number);

  const digits = getDigits(number);
  const sum = digits.reduce(sumDigits, 0);

  return superDigit(sum);
};

const repeatNumber = (number, repeats) => {
  if (repeats <= 1) return number.toString();

  return number.toString() + repeatNumber(number.toString(), repeats - 1);
};
const getDigits = number => number.toString().match(/[0-9]/g);
const sumDigits = (sum, digit) => sum + Number(digit);

module.exports = { superDigit };