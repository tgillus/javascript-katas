const decode = (romanNumeral) => {
  const romanDigits = romanNumeral.match(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g);

  return romanDigits.reduce(addRomanDigits, 0);
};

const addRomanDigits = (sum, romanDigit) => sum + romanToDecimal(romanDigit);

const romanToDecimal = (romanNumeral) => {
  switch (romanNumeral) {
  case 'I':
    return 1;
  case 'IV':
    return 4;
  case 'V':
    return 5;
  case 'IX':
    return 9;
  case 'X':
    return 10;
  case 'XL':
    return 40;
  case 'L':
    return 50;
  case 'XC':
    return 90;
  case 'C':
    return 100;
  case 'CD':
    return 400;
  case 'CM':
    return 900;
  case 'D':
    return 500;
  case 'M':
    return 1000;
  default:
    return 0;
  }
};

module.exports = { decode };
