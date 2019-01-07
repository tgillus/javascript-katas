const diagonalDifference = matrix => {
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < matrix.length; i++) {
    leftToRight += matrix[i][i];
  }

  for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
    rightToLeft += matrix[i][j];
  }

  return Math.abs(leftToRight - rightToLeft);
};

module.exports = { diagonalDifference };