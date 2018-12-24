const { add } = require('../../src/coderbyte/simple-adding.js');

describe('add', () => {
  it('adds all the numbers from 1 to 2', () => {
    expect(add(2)).toBe(3);
  });

  it('adds all the numbers from 1 to 11', () => {
    expect(add(11)).toBe(66);
  });

  it('adds all the numbers from 1 to 12', () => {
    expect(add(12)).toBe(78);
  });

  it('adds all the numbers from 1 to 140', () => {
    expect(add(140)).toBe(9870);
  });
});