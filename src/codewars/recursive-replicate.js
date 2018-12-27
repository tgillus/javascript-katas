const replicate = (times, number) => {
  if (times < 1) {
    return [];
  }

  return [number].concat(replicate(times - 1, number));
};

module.exports = { replicate };