class QuotePrinter {
  constructor(quote, author) {
    const errors = checkForInvalidArgs({ quote, author });

    if (errors.length > 0) {
      throw errors.join(' ');
    }

    this.quote = quote;
    this.author = author;
  }
  
  getFormattedQuote() {
    return `${this.author} says, "${this.quote}"`;
  }
}

const checkForInvalidArgs = args => {
  const errors = [];

  Object.keys(args).forEach(property => {
    if (isInvalidArg(args[property])) {
      errors.push(errorText(property));
    }
  });

  return errors;
};

const isInvalidArg = arg => {
  return !arg || typeof arg !== 'string' || !arg.trim();
};

const errorText = property => `Valid ${property} is required.`;

module.exports = { QuotePrinter };