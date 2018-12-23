const getSum = (number1, number2) => {
  const [smallerNumber, largerNumber] = findLargerAndSmallerNumber(number1, number2);
  const numbersToAdd = generateNumbersToAdd(smallerNumber, largerNumber);

  return numbersToAdd.reduce(addNumbers);
};

const findLargerAndSmallerNumber = (number1, number2) => {
  return number1 < number2 ? [number1, number2] : [number2, number1];
};

const generateNumbersToAdd = (smallerNumber, largerNumber) => {
  const numbers = [];

  for (let i = smallerNumber; i <= largerNumber; i++) {
    numbers.push(i);
  }

  return numbers;
};

const addNumbers = (number1, number2) => number1 + number2;

module.exports = { getSum };