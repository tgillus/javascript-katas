const birthdayCakeCandles = (candles) => {
  let high = candles[0];
  let highCount = 1;

  for (let i = 1; i < candles.length; i++) {
    if (candles[i] === high) {
      highCount++;
      continue;
    }

    if (candles[i] > high) {
      high = candles[i];
      highCount = 1;
    }
  }

  return highCount;
};

module.exports = { birthdayCakeCandles };
