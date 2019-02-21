const romanToDecimal = {
  I:     1,
  IV:    4,
  V:     5,
  IX:    9,
  X:    10,
  XL:   40,
  L:    50,
  XC:   90,
  C:   100,
  CD:  400,
  CM:  900,
  D:   500,
  M:  1000
};

const decode = (romanNumeral) => {
  const romanDigits = romanNumeral.match(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g);

  return romanDigits.reduce(addRomanDigits, 0);
};

const addRomanDigits = (sum, romanDigit) => sum + romanToDecimal[romanDigit];

module.exports = { decode };
