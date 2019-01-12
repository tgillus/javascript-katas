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
