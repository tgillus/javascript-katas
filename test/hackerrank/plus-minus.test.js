// Plus Minus - https://www.hackerrank.com/challenges/plus-minus/problem

// Given an array of integers, calculate the fractions of its elements that are
// positive, negative, and are zeros. Print the decimal value of each fraction
// on a new line.

// For example, given the array arr = [1, 1, 0, -1, -1] there are  elements,
// two positive, two negative and one zero. Their ratios would be
// 2/5 = 0.400000, 2/5 = 0.400000, and 1/5 = 0.200000. It should be printed as:

// 0.400000
// 0.400000
// 0.200000

const { plusMinus } = require('../../src/hackerrank/plus-minus');

describe('plusMinus', () => {
  it('calculates fractions of positive, negative, and zero numbers', () => {
    const arr = [1, 1, 0, -1, -1];
    const expected = '0.400000\n0.400000\n0.200000';

    expect(plusMinus(arr)).toEqual(expected);
  });
});
