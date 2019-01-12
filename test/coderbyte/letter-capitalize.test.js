// Letter Capitalize - https://www.coderbyte.com/results/tgillus:Letter%20Capitalize:JavaScript

// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only
// one space.

const { letterCapitalize } = require('../../src/coderbyte/letter-capitalize');

describe('letterCapitalize', () => {
  it("capitalizes the first letter of each word in 'hello world'", () => {
    const result = letterCapitalize('hello world');
    const expected = 'Hello World';

    expect(result).toBe(expected);
  });

  it("capitalizes the first letter of each word in 'i ran there'", () => {
    const result = letterCapitalize('i ran there');
    const expected = 'I Ran There';

    expect(result).toBe(expected);
  });
});
