// Resursive Replication - https://www.codewars.com/kata/recursive-replication/javascript

// You need to design a recursive function called replicate which will receive
// arguments times and number. The function should return an array containing
// repetitions of the number argument. For instance, replicate(3, 5) should
// return [5,5,5]. If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

const { replicate } = require('../../src/codewars/recursive-replicate');

describe('replicate', () => {
  it('replicates a number x number of times', () => {
    expect(replicate(3, 5)).toEqual([5, 5, 5]);
    expect(replicate(8, 0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('returns an empty array if times is zero', () => {
    expect(replicate(0, 12)).toEqual([]);
  });

  it('returns an empty array if times is negative', () => {
    expect(replicate(-1, 12)).toEqual([]);
  });
});