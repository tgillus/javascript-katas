const miniMaxSum = (arr) => {
  const sortedArr = arr.sort();
  const sum = sortedArr.reduce((total, number) => total + number, 0);
  const min = sum - sortedArr[sortedArr.length - 1];
  const max = sum - sortedArr[0];

  return `${min} ${max}`;
};

module.exports = { miniMaxSum };
