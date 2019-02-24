const KAPREKARS_CONSTANT = 6174;

const sortDigits = (number) => {
  const ascending = number.toString().split('').sort();
  const descending = [...ascending].reverse();

  return {
    ascending: +ascending.join(''),
    descending: +descending.join('').padEnd(4, '0')
  };
};

const stepsToReachKaprekarsConstant = (number) => {
  let steps = 0;

  while (number !== KAPREKARS_CONSTANT) {
    const { ascending, descending } = sortDigits(number);

    number = descending - ascending;
    steps++;
  }

  return steps;
};

module.exports = {
  sortDigits,
  stepsToReachKaprekarsConstant
};
