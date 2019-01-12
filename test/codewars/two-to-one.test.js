// Two to One - https://www.codewars.com/kata/two-to-one

// Take 2 strings s1 and s2 including only letters from ato z. Return a new
// sorted string, the longest possible, containing distinct letters, each taken
// only once - coming from s1 or s2.

// Examples: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

const { longest } = require('../../src/codewars/two-to-one');

describe('longest', () => {
  it("should return 'xyaabbbccccdefww' when given 'xxxxyyyyabklmopq' and 'abcdefklmopqwxy'", () => {
    const string1 = 'xyaabbbccccdefww';
    const string2 = 'xxxxyyyyabklmopq';
    const expected = 'abcdefklmopqwxy';

    expect(longest(string1, string2)).toBe(expected);
  });

  it("should return 'aretheyhere' when given 'yestheyarehere' and 'aehrsty'", () => {
    const string1 = 'aretheyhere';
    const string2 = 'yestheyarehere';
    const expected = 'aehrsty';

    expect(longest(string1, string2)).toBe(expected);
  });

  it("should return 'loopingisfunbutdangerous' when given 'lessdangerousthancoding' and 'abcdefghilnoprstu'", () => {
    const string1 = 'loopingisfunbutdangerous';
    const string2 = 'lessdangerousthancoding';
    const expected = 'abcdefghilnoprstu';

    expect(longest(string1, string2)).toBe(expected);
  });

  it("should return 'inmanylanguages' when given 'theresapairoffunctions' and 'acefghilmnoprstuy'", () => {
    const string1 = 'inmanylanguages';
    const string2 = 'theresapairoffunctions';
    const expected = 'acefghilmnoprstuy';

    expect(longest(string1, string2)).toBe(expected);
  });
});
