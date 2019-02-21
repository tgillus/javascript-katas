const decode = (romanNumeral) => {
  const romanNumeralDigits = romanNumeral.split('');
  let total = 0;
  let i = 0;

  while (i < romanNumeralDigits.length) {
    const current = convertToDecimal(romanNumeralDigits[i]);
    const next = convertToDecimal(romanNumeralDigits[i + 1]);

    if (currentGreaterThanOrEqualToNext(current, next)) {
      total += current;
      i += 1;
    } else {
      total += next - current;
      i += 2;
    }
  }

  return total;
};

const currentGreaterThanOrEqualToNext = (current, next = 0) => {
  return current >= next;
};

const convertToDecimal = (romanNumeral) => {
  switch (romanNumeral) {
  case 'I':
    return 1;
  case 'V':
    return 5;
  case 'X':
    return 10;
  case 'L':
    return 50;
  case 'C':
    return 100;
  case 'D':
    return 500;
  case 'M':
    return 1000;
  default:
    return undefined;
  }
};

module.exports = { decode };
