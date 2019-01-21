const arraySum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + arraySum(arr.slice(1));
};

module.exports = { arraySum };
