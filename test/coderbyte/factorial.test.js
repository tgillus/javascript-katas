// First Factorial - https://www.coderbyte.com/editor/guest:First%20Factorial:JavaScript

// Have the function FirstFactorial(num) take the num parameter being passed
// and return the factorial of it. For example: if num = 4, then your program
// should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be
// between 1 and 18 and the input will always be an integer. 

const { factorial } = require('../../src/coderbyte/factorial');

describe('factorial', () => {
  it('returns 24 as the factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('returns 40320 as the factorial of 8', () => {
    expect(factorial(8)).toBe(40320);
  });
});