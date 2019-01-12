const { buildProjection } = require('../../src/misc/build-projection-for');

describe('buildProjection', () => {
  it('rejects nested fields that are one level deep', () => {
    const fields = ['a', 'b', 'c', 'a.d'];
    const expected = { 'a': 1, 'b': 1, 'c': 1 };

    expect(buildProjection(fields)).toEqual(expected);
  });

  it('rejects nested fields that are two levels deep', () => {
    const fields = ['a', 'b', 'b.c.d', 'e', 'f'];
    const expected = { 'a': 1, 'b': 1, 'e': 1, 'f': 1 };

    expect(buildProjection(fields)).toEqual(expected);
  });

  it('rejects nested fields that are two and three levels deep', () => {
    const fields = ['a', 'b.c', 'b.c.d', 'e','f'];
    const expected = { 'a': 1, 'b.c': 1, 'e': 1, 'f': 1 };

    expect(buildProjection(fields)).toEqual(expected);
  });

  it('rejects nested fields that are one and three levels deep', () => {
    const fields = ['a', 'b', 'b.c.d', 'e','f'];
    const expected = { 'a': 1, 'b': 1, 'e': 1, 'f':1 };

    expect(buildProjection(fields)).toEqual(expected);
  });

  it('rejects nested fields that are one level deep regardless of order', () => {
    const fields = ['a.d', 'a', 'b', 'c'];
    const expected = { 'a': 1, 'b': 1, 'c': 1 };

    expect(buildProjection(fields)).toEqual(expected);
  });

  it('rejects nested fields that are one, two and three levels deep regardless of order', () => {
    const fields = ['one.two.three', 'one', 'six.seven.eight.nine', 'four', 'four.five', 'six.seven.eight'];
    const expected = { 'four': 1, 'one': 1, 'six.seven.eight': 1 };

    expect(buildProjection(fields)).toEqual(expected);
  });
});
