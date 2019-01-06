// A Very Big Sum - https://www.hackerrank.com/challenges/a-very-big-sum/problem

// Calculate and print the sum of the elements in an array, keeping in mind that
// some of those integers may be quite large.

const { veryBigSum } = require('../../src/hackerrank/very-big-sum');

describe('veryBigSum', () => {
  it('returns the sum of the numbers in an array', () => {
    const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    const expected = 5000000015;

    expect(veryBigSum(arr)).toBe(expected);
  });
});