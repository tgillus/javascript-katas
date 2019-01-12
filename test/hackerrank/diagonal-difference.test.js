// Diagonal Difference - https://www.hackerrank.com/challenges/diagonal-difference/problem

// Given a square matrix, calculate the absolute difference between the sums of
// its diagonals.

// For example, the square matrix arr is shown below:

//  1 2 3
//  4 5 6
//  9 8 9

// The left-to-right diagonal is 1 + 5 + 9 = 15. The right to left diagonal is
// 3 + 5 + 9 = 17. Their absolute differenc is |15 - 17| = 2.

const { diagonalDifference } = require('../../src/hackerrank/diagonal-difference');

describe('diagonalDifference', () => {
  it('finds difference between sum of the diagonals of a 3 x 3 matrix', () =>{
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9]
    ];

    expect(diagonalDifference(matrix)).toBe(2);
  });

  it('finds difference between sum of the diagonals of a 3 x 3 matrix that contains negative number', () =>{
    const matrix = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ];

    expect(diagonalDifference(matrix)).toBe(15);
  });

  it('finds difference between sum of the diagonals of a 4 x 4 matrix', () =>{
    const matrix = [
      [5, 7, 22, 2],
      [4, 5, 11, 3],
      [10, 8, 12, 1],
      [17, 0, 2, 6]
    ];

    expect(diagonalDifference(matrix)).toBe(10);
  });
});
