// Bit Counting - https://www.codewars.com/kata/bit-counting/javascript

// Write a function that takes an integer as input, and returns the number of
// bits that are equal to one in the binary representation of that number. You
// can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function
// should return 5 in this case

const { countOneBits } = require('../../src/codewars/bit-counting');

describe('countOneBits', () => {
  it('should return 0 for the number of bits in the number 0', () => {
    const numberOfOneBits = countOneBits(0);

    expect(numberOfOneBits).toBe(0);
  });

  it('should return 1 for the number of bits in the number 1', () => {
    const numberOfOneBits = countOneBits(1);

    expect(numberOfOneBits).toBe(1);
  });

  it('should return 1 for the number of bits in the number 2', () => {
    const numberOfOneBits = countOneBits(2);

    expect(numberOfOneBits).toBe(1);
  });

  it('should return 5 for the number of bits in the number 59', () => {
    const numberOfOneBits = countOneBits(59);

    expect(numberOfOneBits).toBe(5);
  });

  it('should return 15 for the number of bits in the number 479103', () => {
    const numberOfOneBits = countOneBits(479103);

    expect(numberOfOneBits).toBe(15);
  });

  it('should throw an error unless given a number', () => {
    expect(() => {
      countOneBits(-1);
    }).toThrowError();

    expect(() => {
      countOneBits('invalid');
    }).toThrowError();

    expect(() => {
      countOneBits([]);
    }).toThrowError();

    expect(() => {
      countOneBits({});
    }).toThrowError();

    expect(() => {
      countOneBits('');
    }).toThrowError();

    expect(() => {
      countOneBits();
    }).toThrowError();
  });
});
