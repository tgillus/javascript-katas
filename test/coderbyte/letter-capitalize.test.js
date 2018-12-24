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