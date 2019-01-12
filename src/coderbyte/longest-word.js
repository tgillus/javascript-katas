const longestWord = sentence => {
  const words = wordsWithoutPunctuation(sentence);

  return sortWordsLongestToShortest(words)[0];
};

const wordsWithoutPunctuation = sentence => sentence.match(/[a-z0-9]+/gi);
const sortWordsLongestToShortest = words => words.sort((word1, word2) => word2.length - word1.length);

module.exports = { longestWord };
