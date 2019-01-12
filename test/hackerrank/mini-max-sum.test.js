// Mini-Max Sum - https://www.hackerrank.com/challenges/mini-max-sum/problem

// Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers. Then print the
// respective minimum and maximum values as a single line of two space-separated
// long integers.

// For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and
// our maximum sum is 3 + 5 + 7 + 9 = 24. We would print:

// 6 24

const { miniMaxSum } =  require('../../src/hackerrank/mini-max-sum');

describe('miniMaxSum', () => {
  it("returns '16 24' when given [1, 3, 5, 7, 9]", () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toBe('16 24');
  });

  it("returns '10 14' when given [1, 2, 3, 4, 5]", () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toBe('10 14');
  });

  it("returns '16 24' when given [1, 9, 7, 5, 3]", () => {
    expect(miniMaxSum([1, 9, 7, 5, 3])).toBe('16 24');
  });
});
