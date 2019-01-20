const timeConversion = (standardTime) => {
  const standardTimeRegex = /(\d{2}):(\d{2}):(\d{2})([AP]M)/;

  return standardTime.replace(standardTimeRegex, militaryTime);
};

const militaryTime = (match, hour, minute, second, period) => {
  return `${militaryHour(hour, period)}:${minute}:${second}`;
};

const militaryHour = (hour, period) => {
  const isMorning = period === 'AM';
  const isMidnight = hour === '12' && isMorning;
  const isNoon = hour === '12' && !isMorning;

  if (isMidnight) return '00';
  if (isMorning || isNoon) return hour;

  return `${+hour + 12}`;
};

module.exports = { timeConversion };
