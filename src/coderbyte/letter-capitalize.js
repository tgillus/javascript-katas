const letterCapitalize = str => {
  const words = str.split(' ');
  const newWords = words.map(capitalizeFirstLetter);

  return newWords.join(' ');
};

const capitalizeFirstLetter = word => `${word[0].toUpperCase()}${word.slice(1)}`;

module.exports = { letterCapitalize };