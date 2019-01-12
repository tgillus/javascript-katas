class CharacterCounter {
  static count(str) {
    if (!str) {
      throw new Error('A non-empty string is required.');
    }

    return `'${str}' has ${str.length} characters.`;
  }
}

module.exports = { CharacterCounter };
