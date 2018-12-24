const { hello } = require('../../src/exercism/hello-world');

describe('Hello World', () => {
  test('says hello', () => {
    expect(hello()).toBe('Hello, World!');
  });
});