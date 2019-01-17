// Birthday Cake Candles = https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// You are in charge of the cake for your niece's birthday and have decided the
// cake will have one candle for each year of her total age. When she blows out
// the candles, she’ll only be able to blow out the tallest ones. Your task is
// to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old, and the cake will have 4
// candles of height 4, 4, 1, 3, she will be able to blow out 2 candles
// successfully, since the tallest candles are of height 4 and there are 2 such
// candles.

const { birthdayCakeCandles } = require('../../src/hackerrank/birthday-cake-candles');

describe('birthdayCakeCandles', () => {
  it('returns the number of times the largest number appears in a small array', () => {
    const candles = [4, 4, 1, 3];
    const expected = 2;

    expect(birthdayCakeCandles(candles)).toEqual(expected);
  });

  it('returns the number of times the largest number appears in a large array', () => {
    const candles = [9, 3, 1, 4, 10, 4, 1, 3];
    const expected = 1;

    expect(birthdayCakeCandles(candles)).toEqual(expected);
  });

  it('returns the number of times the largest number appears in another large array', () => {
    const candles = [9, 3, 8, 1, 4, 8, 4, 1, 3, 8];
    const expected = 1;

    expect(birthdayCakeCandles(candles)).toEqual(expected);
  });

  it('returns the number of times the largest number appears in a one element array', () => {
    const candles = [9];
    const expected = 1;

    expect(birthdayCakeCandles(candles)).toEqual(expected);
  });
});
