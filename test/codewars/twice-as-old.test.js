// Twice As Old - https://www.codewars.com/kata/twice-as-old/train/javascript

// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in
// how many years he will be twice as old).

const { twiceAsOld } = require('../../src/codewars/twice-as-old');

describe('twiceAsOld', () => {
  it('returns 22 when parent is 36 and child is 7', () => {
    expect(twiceAsOld(36, 7)).toBe(22);
  });

  it('returns 5 when parent is 55 and child is 30', () => {
    expect(twiceAsOld(55, 30)).toBe(5);
  });

  it('returns 0 when parent is 42 and child is 21', () => {
    expect(twiceAsOld(42, 21)).toBe(0);
  });

  it('returns 20 when parent is 22 and child is 1', () => {
    expect(twiceAsOld(22, 1)).toBe(20);
  });

  it('returns 29 when parent is 29 and child is 0', () => {
    expect(twiceAsOld(29, 0)).toBe(29);
  });
});