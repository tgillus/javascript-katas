// Divisible Sum Pairs - https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// You are given an array of n integers and a positive integer, k. Find and
// print the number of pairs whose sum is divisible by k.

// For example, array = [1, 2, 3, 4, 5] and k = 5. Our three pairs meeting the
// criteria are [1, 4], [2, 3] and [4, 6].

const { divisibleSumPairs } = require('../../src/hackerrank/divisible-sum-pairs');

describe('divisibleSumPairs', () => {
  it('finds 3 pairs for [1, 2, 3, 4, 5, 6] where k is 5', () => {
    const array = [1, 2, 3, 4, 5, 6];

    expect(divisibleSumPairs(array, 5)).toBe(3);
  });

  it('finds 5 pairs for [1, 3, 2, 6, 1, 2] where k is 3', () => {
    const array = [1, 3, 2, 6, 1, 2];

    expect(divisibleSumPairs(array, 3)).toBe(5);
  });
});
