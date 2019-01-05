const { simpleMath } = require('../../src/exercises-for-programmers/simple-math');

describe('simpleMath', () => {
  it('takes two operands and performs basic math on them', () => {
    const expected = '10 + 5 = 15\n10 - 5 = 5\n10 * 5 = 50\n10 / 5 = 2';

    expect(simpleMath('10', '5')).toBe(expected);
  });

  it('it throws an error the first operand is not a valid number', () => {
    expect(() => {
      expect(simpleMath('hello', '5'));
    }).toThrowError('Positive operands are required.');
  });

  it('it throws an error the second operand is not a valid number', () => {
    expect(() => {
      expect(simpleMath('5', 'hello'));
    }).toThrowError('Positive operands are required.');
  });

  it('it throw an error if either of the operands is an alpanumeric string', () => {
    expect(() => {
      expect(simpleMath('5a5', 'bb10'));
    }).toThrowError('Positive operands are required.');
  });

  it('it throws an error the first operand is a negative number', () => {
    expect(() => {
      expect(simpleMath('-10', '5'));
    }).toThrowError('Positive operands are required.');
  });

  it('it throws an error the second operand is a negative number', () => {
    expect(() => {
      expect(simpleMath('10', '-5'));
    }).toThrowError('Positive operands are required.');
  });
});