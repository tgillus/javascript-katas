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