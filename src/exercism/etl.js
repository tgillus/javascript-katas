const transform = oldScores => {
  const newScores = {};

  Object.entries(oldScores).forEach(([score, letters]) => {
    letters.forEach(letter => {
      newScores[letter.toLowerCase()] = parseInt(score);
    });
  });

  return newScores;
};

module.exports = { transform };
