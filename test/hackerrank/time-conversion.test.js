// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour
// clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour
// clock.

const { timeConversion } = require('../../src/hackerrank/time-conversion');

describe('timeConversion', () => {
  it('converts a standard PM time to military time', () => {
    expect(timeConversion('07:05:45PM')).toEqual('19:05:45');
  });

  it('converts a standard AM time to military time', () => {
    expect(timeConversion('09:10:20AM')).toEqual('09:10:20');
  });

  it('converts midnight to military time', () => {
    expect(timeConversion('12:00:00AM')).toEqual('00:00:00');
  });

  it('converts a standard time during the midnight hour to military time', () => {
    expect(timeConversion('12:10:25AM')).toEqual('00:10:25');
  });

  it('converts noon to military time', () => {
    expect(timeConversion('12:00:00PM')).toEqual('12:00:00');
  });

  it('converts a standard time during the noon hour to military time', () => {
    expect(timeConversion('12:25:00PM')).toEqual('12:25:00');
  });
});
