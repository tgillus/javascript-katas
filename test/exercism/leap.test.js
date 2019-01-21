const { isLeap } = require('../../src/exercism/leap');

describe('A leap year', () => {
  test('year not divisible by 4: common year', () => {
    expect(isLeap(2015)).toBeFalsy();
  });

  test('year divisible by 4, not divisible by 100: leap year', () => {
    expect(isLeap(2016)).toBeTruthy();
  });

  test('year divisible by 100, not divisible by 400: common year', () => {
    expect(isLeap(2100)).toBeFalsy();
  });

  test('year divisible by 400: leap year', () => {
    expect(isLeap(2000)).toBeTruthy();
  });

  test('year divisible by 200, not divisible by 400: common year', () => {
    expect(isLeap(1800)).toBeFalsy();
  });

  test('additional leap year tests', () => {
    [1700, 1800, 1900, 1997, 2100, 2200, 2300, 2500, 2600].forEach((year) => {
      expect(isLeap(year)).toBeFalsy();
    });

    [1600, 1992, 1996, 2000, 2400].forEach((year) => {
      expect(isLeap(year)).toBeTruthy();
    });
  });
});
