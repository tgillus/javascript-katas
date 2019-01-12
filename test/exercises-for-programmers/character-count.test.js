const { CharacterCounter } = require('../../src/exercises-for-programmers/character-count');

describe('CharacterCounter#count', () => {
  it("counts the number of characters in 'string'", () => {
    const str = 'string';
    const expected = `'${str}' has 6 characters.`;

    expect(CharacterCounter.count(str)).toBe(expected);
  });

  it("counts the number of characters in 'my string'", () => {
    const str = 'my string';
    const expected = `'${str}' has 9 characters.`;

    expect(CharacterCounter.count(str)).toBe(expected);
  });

  it("counts the number of characters in 'my string also'", () => {
    const str = 'my string also';
    const expected = `'${str}' has 14 characters.`;

    expect(CharacterCounter.count(str)).toBe(expected);
  });

  it('throws an expection when given an empty string', () => {
    expect(() => {
      CharacterCounter.count('');
    }).toThrowError('A non-empty string is required.');
  });

  it('throws an expection when not given a value', () => {
    expect(() => {
      CharacterCounter.count();
    }).toThrowError('A non-empty string is required.');
  });

  it('throws an expection when given null', () => {
    expect(() => {
      CharacterCounter.count(null);
    }).toThrowError('A non-empty string is required.');
  });

  it('throws an expection when not given undefined', () => {
    expect(() => {
      CharacterCounter.count(undefined);
    }).toThrowError('A non-empty string is required.');
  });
});
