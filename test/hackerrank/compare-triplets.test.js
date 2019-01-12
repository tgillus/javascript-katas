const { compareTriplets } = require('../../src/hackerrank/compare-triplets');

describe('compareTriplets', () => {
  it('returns [1, 1] when given [5, 6, 7] [3, 6, 10]', () => {
    const alice = [5, 6, 7];
    const bob = [3, 6, 10];
    const expected = [1, 1];

    expect(compareTriplets(alice, bob)).toEqual(expected);
  });
  
  it('returns [2, 1] when given [17, 28, 30] [99, 16, 8]', () => {
    const alice = [17, 28, 30];
    const bob = [99, 16, 8];
    const expected = [2, 1];

    expect(compareTriplets(alice, bob)).toEqual(expected);
  });

  it('returns [0, 3] when given [4, 10, 27] [99, 70, 32]', () => {
    const alice = [4, 10, 27];
    const bob = [99, 70, 32];
    const expected = [0, 3];

    expect(compareTriplets(alice, bob)).toEqual(expected);
  });

  it('returns [0, 0] when given [17, 28, 30] [17, 28, 30]', () => {
    const alice = [17, 28, 30];
    const bob = [17, 28, 30];
    const expected = [0, 0];

    expect(compareTriplets(alice, bob)).toEqual(expected);
  });
});
