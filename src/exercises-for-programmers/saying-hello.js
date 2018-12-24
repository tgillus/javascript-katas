class Greeter {
  static greeting(subject) {
    if (typeof subject !== 'string' || !subject.trim()) {
      throw 'Subject of greeting is required and must be a string.';
    }

    return `Hello, ${subject}, nice to meet you!`;
  }
}

module.exports = { Greeter };
