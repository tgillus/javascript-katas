const compareTriplets = (alice, bob) => {
  let alicePointTotal = 0;
  let bobPointTotal = 0;

  for (let i = 0; i < alice.length; i++) {
    if (alice[i] === bob[i]) continue;

    alice[i] > bob[i] ? alicePointTotal++ : bobPointTotal++;
  }

  return [alicePointTotal, bobPointTotal];
};

module.exports = { compareTriplets };