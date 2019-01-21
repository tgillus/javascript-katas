const { QuotePrinter } = require('../../src/exercises-for-programmers/printing-quotes');

describe('QuotePrinter', () => {
  it('prints the author and quote', () => {
    const quote = "These aren't the droids you're looking for.";
    const author = 'Obi-Wan Kenobi';
    const expected = 'Obi-Wan Kenobi says, "These aren\'t the droids you\'re looking for."';
    const actual = new QuotePrinter(quote, author).getFormattedQuote();

    expect(actual).toBe(expected);
  });

  it('throws an exception when quote is invalid', () => {
    ['', '    ', null, undefined, 50, {}].forEach((invalidQuote) => {
      expect(() => {
        new QuotePrinter(invalidQuote, 'John Doe');
      }).toThrowError('Valid quote is required.');
    });
  });

  it('throws an exception when author is invalid', () => {
    ['', '    ', null, undefined, 50, {}].forEach((invalidAuthor) => {
      expect(() => {
        new QuotePrinter('To be or not to be . . .', invalidAuthor);
      }).toThrowError('Valid author is required.');
    });
  });

  it('throws an exception when quote and author are invalid', () => {
    ['', '    ', null, undefined, 50, {}].forEach((invalidArg) => {
      expect(() => {
        new QuotePrinter(invalidArg, invalidArg);
      }).toThrowError('Valid quote is required. Valid author is required.');
    });
  });
});
