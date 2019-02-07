// Alphabet Soup - https://coderbyte.com/editor/Alphabet%20Soup:JavaScript

// Have the function AlphabetSoup(str) take the str string parameter being
// passed and return the string with the letters in alphabetical order (ie.
// hello becomes ehllo). Assume numbers and punctuation symbols will not be
// included in the string.

// Input:"coderbyte"
// Output:"bcdeeorty"

// Input:"hooplah"
// Output:"ahhloop"

const { alphabetSoup } = require('../../src/coderbyte/alphabet-soup');

describe('alphabetSoup', () => {
  it('sorts the letters in a string', () => {
    expect(alphabetSoup('coderbyte')).toEqual('bcdeeorty');
  });
});
