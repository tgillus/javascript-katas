const superDigit = (number, repeats = 1) => {
  if (number < 10) return number;

  const digits = ('' + number).split('');
  const sum = digits.reduce(sumDigits, 0) * repeats;

  return superDigit(sum);
};

const sumDigits = (sum, digit) => sum + +digit;

module.exports = { superDigit };