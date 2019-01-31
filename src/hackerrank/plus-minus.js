const plusMinus = (arr) => {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((number) => {
    if (number > 0) positives++;
    if (number < 0) negatives++;
    if (number === 0) zeros++;
  });

  const positivesFraction = (positives / arr.length).toFixed(6);
  const negativesFraction = (negatives / arr.length).toFixed(6);
  const zerosFraction = (zeros / arr.length).toFixed(6);

  return `${positivesFraction}\n${negativesFraction}\n${zerosFraction}`;
};

module.exports = { plusMinus };
