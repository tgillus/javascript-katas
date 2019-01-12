// Recursive Digit Sum = https://www.hackerrank.com/challenges/recursive-digit-sum/problem

// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer. If x has
// only 1 digit, then its super digit is x. Otherwise, the super digit of x is
// equal to the super digit of the sum of the digits of x.

// For example, the super digit of 9875 will be calculated as:
//   super_digit(9875)     9 + 8 + 7 + 5 = 29 
// 	 super_digit(29)               2 + 9 = 11
// 	 super_digit(11)		           1 + 1 =  2
// 	 super_digit(2)		                   =  2

// You are given two numbers n and k. The number p is created by concatenating
// the string n k times. Continuing the above example where n = 9875, assume
// your value k = 4. Your initial p = 9875 9875 9875 9875 (spaces added for
// clarity). All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is
// only one digit, so it's the super digit.

const { superDigit } = require('../../src/hackerrank/recursive-digit-sum');

describe('superDigit', () => {
  describe('without repeat parameter', () => {
    it('finds the super digit of an integer', () => {
      expect(superDigit(9875)).toBe(2);
    });

    it('finds the super digit of an integer if it only has one digit', () => {
      expect(superDigit(5)).toBe(5);
    });
  });

  describe('with repeat parameter', () => {
    it('finds the super digit of an integer that repeats 4 times to form a large integer', () => {
      expect(superDigit(9875, 4)).toBe(8);
    });

    it('finds the super digit of an integer that repeats 3 times', () => {
      expect(superDigit(148, 3)).toBe(3);
    });

    it('finds the super digit of an integer that has multipe digits and the repeat parameter is 1', () => {
      expect(superDigit(9875, 1)).toBe(2);
    });

    it('finds the super digit of an integer has one digit and the repeat parameter is 1', () => {
      expect(superDigit(7, 1)).toBe(7);
    });
  });
});
