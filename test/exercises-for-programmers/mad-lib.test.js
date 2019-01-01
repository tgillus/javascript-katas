const { madLib } = require('../../src/exercises-for-programmers/mad-lib');

describe('madLib', () => {
  it('creates mad lib based on input params', () => {
    const input = { noun: 'dog', verb: 'walk', adjective: 'blue', adverb: 'quickly' };
    const expected = "Do you walk your blue dog quickly? That's hilarious!";

    expect(madLib(input)).toBe(expected);
  });
});