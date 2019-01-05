const simpleMath = (operand1, operand2) => {
  if (invalid(operand1, operand2)) {
    throw new Error('Positive operands are required.');
  }

  const [number1, number2] = convertToIntegers(operand1, operand2);

  return solve(number1, number2);
};

const invalid = (...operands) => {
  return operands.some(operand => /[^0-9]/.test(operand));
};

const convertToIntegers = (...operands) => {
  return operands.map(operand => parseInt(operand));
};

const solve = (number1, number2) => {
  let answer = `${number1} + ${number2} = ${number1 + number2}\n`;
  answer += `${number1} - ${number2} = ${number1 - number2}\n`;
  answer += `${number1} * ${number2} = ${number1 * number2}\n`;
  answer += `${number1} / ${number2} = ${number1 / number2}`;

  return answer;
};

module.exports = { simpleMath };