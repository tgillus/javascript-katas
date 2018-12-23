const longestWord = sentence => {
  const words = removePunctuation(sentence).split(' ');

  return sortWordsLongestToShortest(words)[0];
};

const removePunctuation = sentence => sentence.replace(/[^a-zA-Z\s]/g, '');
const sortWordsLongestToShortest = words => words.sort((word1, word2) => word1.length < word2.length);

module.exports = { longestWord };