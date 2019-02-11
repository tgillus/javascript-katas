class RoomArea {
  constructor({ length, width }) {
    this.length = length;
    this.width = width;
  }

  get squareFeet() {
    return this.length * this.width;
  }

  get squareMeters() {
    const squareMeters = this.squareFeet * 0.09290304;
    const roundedSquareMeters = new FlexibleDecimal({
      number: squareMeters,
      placesAfterDecimal: 3
    });

    return +roundedSquareMeters;
  }
}

class FlexibleDecimal {
  constructor({ number, placesAfterDecimal }) {
    this.number = number;
    this.placesAfterDecimal = placesAfterDecimal;
  }

  valueOf() {
    const roundedNumber = this.number.toFixed(this.placesAfterDecimal);

    return +roundedNumber;
  }
}

module.exports = { RoomArea };
