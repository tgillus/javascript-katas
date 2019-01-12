// Letter Changes - 

// Have the function LetterChanges(str) take the str parameter being passed
// and modify it using the following algorithm. Replace every letter in the
// string with the letter following it in the alphabet (ie. c becomes d, z
// becomes a). Then capitalize every vowel in this new string (a, e, i, o, u)
// and finally return this modified string. 

const { letterChanges } = require('../../src/coderbyte/letter-changes');

describe('letterChanges', () => {
  it("should return 'Ifmmp*3' when given 'hello*3'", () => {
    const result = letterChanges('hello*3');
    const expected = 'Ifmmp*3';

    expect(result).toBe(expected);
  });

  it("should return 'gvO Ujnft!' when given 'fun times!'", () => {
    const result = letterChanges('fun times!');
    const expected = 'gvO Ujnft!';

    expect(result).toBe(expected);
  });

  it("should return 'b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~' for 'a confusing /:sentence:/[ this is not!!!!!!!~'", () => {
    const result = letterChanges('a confusing /:sentence:/[ this is not!!!!!!!~');
    const expected = 'b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~';

    expect(result).toBe(expected);
  });

  it("should return 'abcd' when given 'zabc'", () => {
    const result = letterChanges('zabc');
    const expected = 'Abcd';

    expect(result).toBe(expected);
  });
});
