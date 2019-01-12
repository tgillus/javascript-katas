// Have the function SimpleSymbols(str) take the str parameter being passed and
// determine if it is an acceptable sequence by either returning the string true
// or false. The str parameter will be composed of + and = symbols with several
// letters between them (ie. ++d+===+c++==a) and for the string to be true each
// letter must be surrounded by a + symbol. So the string to the left would be
// false. The string will not be empty and will have at least one letter.

// Sample Test Cases;

//   Input:"+d+=3=+s+"
//   Output:"true"

//   Input:"f++d+"
//   Output:"false"

const { simpleSymbols } = require('../../src/coderbyte/simple-symbols');

describe('simpleSymbols', () => {
  it ('returns true when all letters are surrounded by pluses', () => {
    expect(simpleSymbols('++d+===+c++=+a+')).toBe(true);
  });

  it('returns true when two letters have a plus in between them and a plus to the other side', () => {
    expect(simpleSymbols('===++f+d+==')).toBe(true);
  });

  it('returns false when first letter does not have plus on its left', () => {
    expect(simpleSymbols('+=f+==+d===')).toBe(false);
  });

  it('returns false when first letter does not have plus on its right', () => {
    expect(simpleSymbols('+f=+d===')).toBe(false);
  });

  it('returns false when first letter does not have plus on either side', () => {
    expect(simpleSymbols('===f=+d===')).toBe(false);
  });

  it('returns false when second letter does not have a plus on its left', () => {
    expect(simpleSymbols('+f+=d+==')).toBe(false);
  });

  it('returns false when second letter does not have a plus on its right', () => {
    expect(simpleSymbols('+f+==+d===')).toBe(false);
  });

  it('returns false when first letter does not have plus on either side', () => {
    expect(simpleSymbols('==+f+===d===')).toBe(false);
  });

  it('returns false when no letters have a plus on either side', () => {
    expect(simpleSymbols('=f====d===')).toBe(false);
  });

  it('returns false when the string begins with a letter', () => {
    expect(simpleSymbols('f++d+')).toBe(false);
  });

  it('returns false when the string ends with a letter', () => {
    expect(simpleSymbols('+f++d')).toBe(false);
  });
});
