// First Reverse - https://www.coderbyte.com/results/tgillus:First%20Reverse:JavaScript

// Have the function FirstReverse(str) take the str parameter being passed and
// return the string in reversed order. For example: if the input string is
// "Hello World and Coders" then your program should return the string
// "sredoC dna dlroW olleH".

const { reverseString } = require('../../src/coderbyte/string-reverse');

describe('reverseString', () => {
  it("returns 'halb' for 'blah'", () => {
    const expected = 'halb';

    expect(reverseString('blah')).toBe(expected);
  });

  it("returns '!yadhtrib yppaH' for 'Happy birthday!'", () => {
    const expected = '!yadhtrib yppaH';

    expect(reverseString('Happy birthday!')).toBe(expected);
  });

  it("returns 'etybredoc' for 'coderbyte'", () => {
    const expected = 'etybredoc';

    expect(reverseString('coderbyte')).toBe(expected);
  });

  it("returns 'edoC evoL I' for 'I Love Code'", () => {
    const expected = 'edoC evoL I';

    expect(reverseString('I Love Code')).toBe(expected);
  });
});