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
    expect(() => {
      Greeter.greet('');
    }).toThrowError('Subject of greeting is required and must be a string.');
  });

  it('throws exception when subject of the greeting is string with one space', () => {
    expect(() => {
      Greeter.greet(' ');
    }).toThrowError('Subject of greeting is required and must be a string.');
  });

  it('throws exception when subject of the greeting is string with multiple spaces', () => {
    expect(() => {
      Greeter.greet('   ');
    }).toThrowError('Subject of greeting is required and must be a string.');
  });

  it('throws exception when subject of the greeting is not provided', () => {
    expect(() => {
      Greeter.greet();
    }).toThrowError('Subject of greeting is required and must be a string.');
  });

  it('throws exception when subject of the greeting is null', () => {
    expect(() => {
      Greeter.greet(null);
    }).toThrowError('Subject of greeting is required and must be a string.');
  });

  it('throws exception when subject of the greeting is undefined', () => {
    expect(() => {
      Greeter.greet(undefined);
    }).toThrowError('Subject of greeting is required and must be a string.');
  });
});