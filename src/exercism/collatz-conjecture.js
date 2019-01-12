const steps = (number, count = 0) => {
  if (number < 1) throw new Error('Only positive numbers are allowed');
  if (number === 1) return count;

  number = isEven(number) ? number / 2 : number * 3 + 1;

  return steps(number, count + 1);
};

const isEven = number => number % 2 === 0;

module.exports = { steps };
