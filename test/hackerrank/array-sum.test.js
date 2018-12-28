// Simple Array Sum - https://www.hackerrank.com/challenges/simple-array-sum/problem

// Given an array of integers, find the sum of its elements.

const { arraySum } = require('../../src/hackerrank/array-sum');

describe('arraySum', () => {
  it('it sums the numbers in an array', () => {
    expect(arraySum([1, 2, 3, 4, 10, 11])).toBe(31);
  });
});