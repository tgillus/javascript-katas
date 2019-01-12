const isLeap = year => {
  return (
    isDivisibleBy4(year) &&
    isNotDivisibleBy100(year) ||
    isDivisibleBy400(year)
  );
};

const isDivisibleBy4 = year => year % 4 === 0;
const isNotDivisibleBy100 = year => year % 100 !== 0;
const isDivisibleBy400 = year => year % 400 === 0;

module.exports = { isLeap };
