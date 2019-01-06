// Bit Counting - https://www.codewars.com/kata/bit-counting/javascript

// Write a function that takes an integer as input, and returns the number of
// bits that are equal to one in the binary representation of that number. You
// can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function
// should return 5 in this case

const countOneBits = number => {
  if (isPositiveNumber(number)) {
    throw new Error('Argument must be positive number.');
  }

  const binaryNumber = convertToBinary(number);

  return findOneBits(binaryNumber).length;
};

const isPositiveNumber = number => typeof number !== 'number' || number < 0;
const convertToBinary = number => number.toString(2);
const findOneBits = binaryNumber => binaryNumber.split('').filter(digit => digit === '1');

module.exports = { countOneBits };