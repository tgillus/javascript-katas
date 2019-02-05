// Time Convert - https://coderbyte.com/information/Time%20Convert

// Have the function TimeConvert(num) take the num parameter being passed and
// return the number of hours and minutes the parameter converts to (ie. if
// num = 63 then the output should be 1:3). Separate the number of hours and
// minutes with a colon.

const { timeConvert } = require('../../src/coderbyte/time-convert');

describe('timeConvert', () => {
  it('converts 63 to 1:3', () => {
    expect(timeConvert(63)).toEqual('1:3');
  });

  it('converts 126 to 2:6', () => {
    expect(timeConvert(126)).toEqual('2:6');
  });

  it('converts 45 to 0:45', () => {
    expect(timeConvert(45)).toEqual('0:45');
  });
});
