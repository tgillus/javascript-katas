const timeConversion = (time) => {
  const timeRegex = /(\d{2}):(\d{2}):(\d{2})([AP]M)/;

  return time.replace(timeRegex, convertToMilitaryTime);
};

const convertToMilitaryTime = (match, hour, minute, second, period) => {
  return `${convertHour(hour, period)}:${minute}:${second}`;
};

const convertHour = (hour, period) => {
  const isMorning = period === 'AM';
  const isMidnight = hour === '12' && isMorning;
  const isNoon = hour === '12' && !isMorning;

  if (isMidnight) return '00';
  if (isMorning || isNoon) return hour;

  return `${+hour + 12}`;
};

module.exports = { timeConversion };
