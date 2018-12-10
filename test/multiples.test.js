// Multiples of 3 and 5 - https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const { sumOfMultiplesOfThreeAndFive } = require('../src/multiples');

describe('multiplesOfThreeAndFive', () => {
  it('should return sum of multiples of 3 or 5 below 10', () => {
    const multiples = sumOfMultiplesOfThreeAndFive(10);

    expect(multiples).toBe(23);
  });

  it('should return sum of multiples of 3 or 5 below 1000', () => {
    const multiples = sumOfMultiplesOfThreeAndFive(1000);

    expect(multiples).toBe(233168);
  });
});