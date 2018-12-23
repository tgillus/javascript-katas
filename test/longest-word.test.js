// Longest Word = https://coderbyte.com/results/tgillus:Longest%20Word:JavaScript

// Have the function LongestWord(sen) take the sen parameter being passed and
// return the largest word in the string. If there are two or more words that
// are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. 

const { longestWord } = require('../src/longest-word');

describe('longestWord', () => {
  it("should return 'love' for the string 'I love dogs'", () => {
    const sentence = 'I love dogs';
    const expected = 'love';

    expect(longestWord(sentence)).toBe(expected);
  });

  it("should return 'time' for the sentence 'fun&!! time'", () => {
    const sentence = 'fun&!! time';
    const expected = 'time';

    expect(longestWord(sentence)).toBe(expected);
  });

  it("should return 'Argument' for the sentence 'Argument goes here'", () => {
    const sentence = 'Argument goes here';
    const expected = 'Argument';

    expect(longestWord(sentence)).toBe(expected);
  });

  it("should return 'Give' for the sentence 'Give me a high five.'", () => {
    const sentence = 'Give me a high five.';
    const expected = 'Give';

    expect(longestWord(sentence)).toBe(expected);
  });

  it("should return 'high9' for the sentence 'Give me a high9 five.'", () => {
    const sentence = 'Give me a high9 five.';
    const expected = 'high9';

    expect(longestWord(sentence)).toBe(expected);
  });

  it("should return 'coderbyte' for the sentence 'the $$$longest# word is coderbyte'", () => {
    const sentence = 'the $$$longest# word is coderbyte';
    const expected = 'coderbyte';

    expect(longestWord(sentence)).toBe(expected);
  });
});