const { Greeter } = require('../../src/exercises-for-programmers/saying-hello');

describe('Greeter', () => {
  it('greets Tramaine with standard greeting', () => {
    const subject = 'Tramaine';
    const expected = `Hello, ${subject}, nice to meet you!`;

    expect(Greeter.greet(subject)).toBe(expected);
  });

  it('greets Jane with standard greeting', () => {
    const subject = 'Jane';
    const expected = `Hello, ${subject}, nice to meet you!`;

    expect(Greeter.greet(subject)).toBe(expected);
  });

  it('throws exception when subject of the greeting is an empty string', () => {
    ['', ' ', '   ', null, undefined].forEach(invalidGreeting => {
      expect(() => {
        Greeter.greet(invalidGreeting);
      }).toThrowError('Subject of greeting is required and must be a non-empty string.');
    });
  });
});