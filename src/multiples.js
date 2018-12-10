// Multiples of 3 and 5 - https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiplesOfThreeAndFive = number => {
  const numbers = generateNumbersBelowValue(number);
 
  return computeSumOfNumbers(numbers);
};

const generateNumbersBelowValue = number => {
  const allNumbers = [];

  for (let i = 1; i < number; i++) {
    if (isMultipleOfThreeOrFive(i)) {
      allNumbers.push(i);
    }
  }

  return allNumbers;
};

const isMultipleOfThreeOrFive = number => number % 3 === 0 || number % 5 === 0;

const computeSumOfNumbers = numbers => {
  const reducer = (accumulator, number) => accumulator + number;

  return numbers.reduce(reducer, 0);
};

module.exports = { sumOfMultiplesOfThreeAndFive };