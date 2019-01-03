class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
  }

  kind() {
    if (noSides(this.sides)
      || hasNegativeSide(this.sides)
      || violatesInquality(this.sides)) {
      throw new Error('Invalid triangle.');
    }

    if (allSidesEqual(this.sides)) {
      return 'equilateral';
    }

    if (twoSidesEqual(this.sides)) {
      return 'isosceles';
    }

    return 'scalene';
  }
}

const noSides = sides => sides.some(side => side === 0);
const hasNegativeSide = sides => sides.some(side => side < 0);
const violatesInquality = ([side1, side2, side3]) => {
  if (side1 + side2 < side3) return true;
  if (side1 + side3 < side2) return true;
  if (side2 + side3 < side1) return true;
  return false;
};
const allSidesEqual = ([side1, side2, side3]) => side1 === side2 && side1 === side3;
const twoSidesEqual = ([side1, side2, side3]) => side1 === side2 || side1 === side3 || side2 === side3;

module.exports = { Triangle };