const checkNums = (num1, num2) => {
  if (num1 < num2) return 'true';
  if (num1 > num2) return 'false';
  return '-1';
};

module.exports = { checkNums };
