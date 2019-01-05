const simpleMath = (operand1, operand2) => {
  if (invalidOrNegative(operand1, operand2)) {
    throw new Error('Positive operands are required.');
  }

  const [number1, number2] = convertToIntegers(operand1, operand2);

  return solve(number1, number2);
};

const invalidOrNegative = (...operands) => {
  return operands.some(operand => /[^0-9]/.test(operand));
};

const convertToIntegers = (...operands) => {
  return operands.map(operand => parseInt(operand));
};

const solve = (number1, number2) => {
  const output = [];

  output.push(`${number1} + ${number2} = ${number1 + number2}`);
  output.push(`${number1} - ${number2} = ${number1 - number2}`);
  output.push(`${number1} * ${number2} = ${number1 * number2}`);
  output.push(`${number1} / ${number2} = ${number1 / number2}`);

  return output.join('\n');
};

module.exports = { simpleMath };