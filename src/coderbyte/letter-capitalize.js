const letterCapitalize = str => {
  const words = str.split(' ');
  const capitalizedWords = words.map(capitalizeFirstLetter);

  return capitalizedWords.join(' ');
};

const capitalizeFirstLetter = word => `${word[0].toUpperCase()}${word.slice(1)}`;

module.exports = { letterCapitalize };
