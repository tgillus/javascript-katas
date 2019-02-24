// Kaprekar's Constant - https://coderbyte.com/editor/Kaprekars%20Constant:JavaScript

// Have the function KaprekarsConstant(num) take the num parameter being passed
// which will be a 4-digit number with at least two distinct digits. Your
// program should perform the following routine on the number: Arrange the
// digits in descending order and in ascending order (adding zeroes to fit it to
// a 4-digit number), and subtract the smaller number from the bigger number.
// Then repeat the previous step. Performing this routine will always cause you
// to reach a fixed number: 6174. Then performing the routine on 6174 will
// always give you 6174 (7641 - 1467 = 6174). Your program should return the
// number of times this routine must be performed until 6174 is reached.

// For example: if num is 3524 your program should return 3 because of the
// following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352,
// (3) 8532 - 2358 = 6174.

const {
  sortDigits,
  stepsToReachKaprekarsConstant
} = require('../../src/coderbyte/kaprekars-constant');

describe("Kaprekar's Constant", () => {
  it('sorts the digits number in ascending and descending order', () => {
    expect(sortDigits(3524)).toEqual({ descending: 5432, ascending: 2345 });
  });

  it("reaches Kaprekar's Constant in 0 steps for 6174", () => {
    expect(stepsToReachKaprekarsConstant(6174)).toBe(0);
  });

  it("reaches Kaprekar's Constant in 3 steps for 3524", () => {
    expect(stepsToReachKaprekarsConstant(3524)).toBe(3);
  });

  it("reaches Kaprekar's Constant in 7 steps for 9831", () => {
    expect(stepsToReachKaprekarsConstant(9831)).toBe(7);
  });

  describe('number less than 4 digits', () => {
    it('pads the descending value with zeros when sorting digits', () => {
      expect(sortDigits(48)).toEqual({ descending: 8400, ascending: 48 });
    });

    it("reaches Kaprekar's Constant in 7 steps for 251", () => {
      expect(stepsToReachKaprekarsConstant(251)).toBe(7);
    });
  });
});
