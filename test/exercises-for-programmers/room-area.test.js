const { RoomArea } = require('../../src/exercises-for-programmers/room-area');

describe('roomArea', () => {
  it('takes room dimensions in feet and calculates area in square feet', () => {
    const roomArea = new RoomArea({ length: 15, width: 20 });

    expect(roomArea.squareFeet).toEqual(300);
  });

  it('takes room dimensions in feet and calculates area in square meters', () => {
    const roomArea = new RoomArea({ length: 15, width: 20 });

    expect(roomArea.squareMeters).toEqual(27.871);
  });
});
