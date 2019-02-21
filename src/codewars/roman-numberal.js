const decode = (romanNumeral) => {
  const romanNumeralDigits = romanNumeral.split('');
  let total = 0;
  let i = 0;

  while (i < romanNumeralDigits.length) {
    const current = convertToDecimal(romanNumeralDigits[i]);
    const next = convertToDecimal(romanNumeralDigits[i + 1]);

    total += incrementTotalBy(current, next);
    i += incrementIndexBy(current, next);
  }

  return total;
};

const incrementTotalBy = (current, next) => {
  if (current < next) {
    return next - current;
  }

  return current;
};

const incrementIndexBy = (current, next) => {
  if (current < next) {
    return 2;
  }

  return 1;
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
    return 0;
  }
};

module.exports = { decode };
