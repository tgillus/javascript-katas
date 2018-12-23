// Given two integers a and b, which can be positive or negative, find the sum
// of all the numbers between including them too and return it. If the two
// numbers are equal return a or b.

// Note: a and b are not ordered!

const { getSum } = require('../src/sum-of-numbers');

describe('getSum', () => {
  it('should return 1 when given 1 and 0', () => {
    expect(getSum(1, 0)).toBe(1);
  });

  it('should return 3 when given 1 and 2', () => {
    expect(getSum(1, 2)).toBe(3);
  });

  it('should return 1 when given 0 and 1', () => {
    expect(getSum(0, 1)).toBe(1);
  });

  it('should return 1 when given 1 and 1', () => {
    expect(getSum(1, 1)).toBe(1);
  });

  it('should return -1 when given -1 and 0', () => {
    expect(getSum(-1, 0)).toBe(-1);
  });

  it('should return 2 when given -1 and 2', () => {
    expect(getSum(-1, 2)).toBe(2);
  });

  it('should return 45 when given 10 and 5', () => {
    expect(getSum(10, 5)).toBe(45); 
  });

  it('should return 0 when given 0 and 0', () => {
    expect(getSum(0, 0)).toBe(0);
  });

  it('should return 153 when given 13 and 21', () => {
    expect(getSum(13, 21)).toBe(153);
  });

  it('should return 150699 when given 204 and 585', () => {
    expect(getSum(204, 585)).toBe(150699);
  });

  it('should return 27169 when given 319 and 219', () => {
    expect(getSum(319, 219)).toBe(27169);
  });

  it('should return -100230 when given -262 and -518', () => {
    expect(getSum(-262, -518)).toBe(-100230);
  });

  it('should return 59684 when given 2 and 345', () => {
    expect(getSum(2, 345)).toBe(59684);
  });

  it('should return -52002 when given -535 and -428', () => {
    expect(getSum(-535, -428)).toBe(-52002);
  });

  it('should return 59684 when given 2 and 345', () => {
    expect(getSum(2, 345)).toBe(59684);
  });
});