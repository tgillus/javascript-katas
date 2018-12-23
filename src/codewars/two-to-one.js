const longest = (string1, string2) => {
  const allCharacters = getCharactersFromStrings(string1, string2);
  const uniqueCharacters = getUniqueCharacters(allCharacters);

  return uniqueCharacters.sort().join('');
};

const getCharactersFromStrings = (string1, string2) => {
  return string1.concat(string2).split('');
};

const getUniqueCharacters = characters => Array.from(new Set(characters));

module.exports = { longest };