const { unique } = require('../../src/misc/remove-duplicates');

describe('unique', () => {
  it('removes duplicate values from an array', () => {
    expect(unique([1, 1, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  it('returns original array if no duplicates present', () => {
    expect(unique([10, 11])).toEqual([10, 11]);
  });
});
