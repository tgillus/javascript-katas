// Array.diff - https://www.codewars.com/kata/array-dot-diff/javascript

// Your goal in this kata is to implement a difference function, which
// subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

const { arrayDiff } = require('../../src/codewars/array-diff');

describe('arrayDiff', () => {
  it('should return [1] when given [1, 2] and [2]', () => {
    const expected = [1];
    const result = arrayDiff([1, 2], [2]);

    expect(result).toEqual(expected);
  });

  it('should return [1, 3] when given [1, 2, 2, 2, 3] and [2]', () => {
    const expected = [1, 3];
    const result = arrayDiff([1, 2, 2, 2, 3], [2]);

    expect(result).toEqual(expected);
  });

  it('should return [] when given [] and [4, 5]', () => {
    const expected = [];
    const result = arrayDiff([], [4, 5]);

    expect(result).toEqual(expected);
  });

  it('should return [-2, 4] when given [1, -2, 3] and [1, 3, 4]', () => {
    const expected = [-2];
    const result = arrayDiff([1, -2, 3], [1, 3, 4]);

    expect(result).toEqual(expected);
  });

  it('should return [1, 3] when given [1, -2, 3] and [-2, 4]', () => {
    const expected = [1, 3];
    const result = arrayDiff([1, -2, 3], [-2, 4]);

    expect(result).toEqual(expected);
  });

  it('should return [1, -2, 3] when given [1, -2, 3] and []', () => {
    const expected = [1, -2, 3];
    const result = arrayDiff([1, -2, 3], []);

    expect(result).toEqual(expected);
  });

  it('should return [] when given [1, -2, 3] and [1, -2, 3]', () => {
    const expected = [];
    const result = arrayDiff([1, -2, 3], [1, -2, 3]);

    expect(result).toEqual(expected);
  });
});