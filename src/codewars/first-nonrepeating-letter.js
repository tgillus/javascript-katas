const firstNonRepeatingLetter = word => {
  const letters = word.split('');

  return letters.find(letter => letterDoesNotRepeat(letter, word)) || '';
};

const letterDoesNotRepeat = (letter, word) => {
  const occurrences = word.match(new RegExp(letter, 'gi'));

  return occurrences.length === 1;
};

module.exports = { firstNonRepeatingLetter };
