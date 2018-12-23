const getSum = (number1, number2) => {
  const smallerNumber = Math.min(number1, number2);
  const largerNumber = Math.max(number1, number2);

  return addNumbers(smallerNumber, largerNumber);
};

const addNumbers = (smallerNumber, largerNumber) => {
  if (smallerNumber === largerNumber) {
    return smallerNumber;
  }

  return smallerNumber + addNumbers(++smallerNumber, largerNumber);
};

module.exports = { getSum };