// Roman Numerals Decoder - https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

// Create a function that takes a Roman numeral as its argument and returns its
// value as a numeric decimal integer. You don't need to validate the form of
// the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the
// number to be encoded separately, starting with the leftmost digit and
// skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for
// 1666, "MDCLXVI", uses each letter in descending order.

const { decode } = require('../../src/codewars/roman-numberal');

describe('RomanNumberDecoder', () => {
  it("returns '1' for roman numberal 'I'", () => {
    expect(decode('I')).toBe(1);
  });

  it("returns '5' for roman numeral 'V'", () => {
    expect(decode('V')).toBe(5);
  });

  it("returns '10' for roman numeral 'X'", () => {
    expect(decode('X')).toBe(10);
  });

  it("returns '50' for roman numeral 'L'", () => {
    expect(decode('L')).toBe(50);
  });

  it("returns '100' for roman numeral 'C'", () => {
    expect(decode('C')).toBe(100);
  });

  it("returns '500' for roman numeral 'D'", () => {
    expect(decode('D')).toBe(500);
  });

  it("returns '1000' for roman numeral 'M'", () => {
    expect(decode('M')).toBe(1000);
  });

  it("returns '2' for roman numeral 'II'", () => {
    expect(decode('II')).toBe(2);
  });

  it("returns '21' for roman numeral 'XXI'", () => {
    expect(decode('XXI')).toBe(21);
  });

  it("returns '4' for roman numeral 'IV'", () => {
    expect(decode('IV')).toBe(4);
  });

  it("returns '1990' for roman numeral 'MCMXC'", () => {
    expect(decode('MCMXC')).toBe(1990);
  });

  it("returns '2008' for roman numeral 'MMVIII'", () => {
    expect(decode('MMVIII')).toBe(2008);
  });

  it("returns '1666' for roman numeral 'MDCLXVI'", () => {
    expect(decode('MDCLXVI')).toBe(1666);
  });
});
