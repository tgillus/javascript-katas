const plusMinus = (arr) => {
  return fractions(countPositivesNegativesAndZeros(arr), arr.length);
};

const countPositivesNegativesAndZeros = (arr) => {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((number) => {
    if (number > 0) positives++;
    if (number < 0) negatives++;
    if (number === 0) zeros++;
  });

  return [positives, negatives, zeros];
};

const fractions = (dividends, total) => {
  return dividends.map(dividend => quotient(dividend, total)).join('\n');
};

const quotient = (dividend, divisor) => {
  return (dividend / divisor).toFixed(6);
};

module.exports = { plusMinus };
