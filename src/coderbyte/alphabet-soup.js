const alphabetSoup = (string) => {
  const characters = stringToCharacters(string);
  const sortedCharacters = sortCharacters(characters);

  return characterToString(sortedCharacters);
};

const stringToCharacters = string => string.split('');

const sortCharacters = characters => characters.sort();

const characterToString = characters => characters.join('');

module.exports = { alphabetSoup };
