// First Non-repeating Character - https://www.codewars.com/kata/first-non-repeating-character

// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the
// string.

// As an added challenge, upper- and lowercase letters are considered the same
// character, but the function should return the correct case for the initial
// letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return None.

const { firstNonRepeatingLetter } = require('../../src/codewars/first-nonrepeating-letter');

describe('firstNonRepeatingLetter', () => {
  it("returns 't' when given the word 'stress'", () => {
    expect(firstNonRepeatingLetter('stress')).toBe('t');
  });

  it("ignore case and returns 'T' when given the word 'sTreSS'", () => {
    expect(firstNonRepeatingLetter('sTreSS')).toBe('T');
  });

  it("returns 'e' when given the word 'moonmen'", () => {
    expect(firstNonRepeatingLetter('moonmen')).toBe('e');
  });

  it("returns '' when all letters in a when repeat 'sSStTT'", () => {
    expect(firstNonRepeatingLetter('sSStTT')).toBe('');
  });

  it('returns an empty string when given an empty string', () => {
    expect(firstNonRepeatingLetter('')).toBe('');
  });
});
