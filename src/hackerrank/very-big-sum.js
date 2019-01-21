const veryBigSum = (arr) => {
  return arr.reduce((total, number) => total + number, 0);
};

module.exports = { veryBigSum };
