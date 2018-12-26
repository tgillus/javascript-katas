class Greeter {
  static greet(subject) {
    if (typeof subject !== 'string' || !subject.trim()) {
      throw 'Subject of greeting is required and must be a non-empty string.';
    }

    return `Hello, ${subject}, nice to meet you!`;
  }
}

module.exports = { Greeter };
