const divisibleSumPairs = (array, k) => {
  let pairs = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const divisibleByK = (array[i] + array[j]) % k === 0;

      if (divisibleByK) {
        pairs++;
      }
    }
  }

  return pairs;
};

module.exports = {
  divisibleSumPairs
};
