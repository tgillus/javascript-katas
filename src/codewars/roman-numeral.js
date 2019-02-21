const decode = (romanNumeral) => {
  let total = 0;
  let index = 0;

  while (index < romanNumeral.length) {
    const [current, next] = getPairAsDecimalValue(romanNumeral, index);

    total += incrementTotalBy(current, next);
    index += incrementIndexBy(current, next);
  }

  return total;
};

const getPairAsDecimalValue = (romanNumeral, index) => {
  return [0, 1].map(number => decimalValue(romanNumeral[index + number]));
};

const incrementTotalBy = (current, next) => {
  return current < next ? next - current : current;
};

const incrementIndexBy = (current, next) => {
  return current < next ? 2 : 1;
};

const decimalValue = (romanNumeral) => {
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
