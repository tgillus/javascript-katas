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

    return roundDecimalPlaces({ number: squareMeters, places: 3 });
  }
}

const roundDecimalPlaces = ({ number, places = 2 } ) => {
  const roundedNumber = (number).toFixed(places);

  return parseFloat(roundedNumber);
};

module.exports = { RoomArea };
