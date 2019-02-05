const timeConvert = (number) => {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;

  return `${hours}:${minutes}`;
};

module.exports = { timeConvert };
