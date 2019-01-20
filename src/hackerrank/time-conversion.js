const timeConversion = standardTime => {
  return new StandardTime(standardTime).toMilitaryTime();
};

class StandardTime {
  constructor(time) {
    time.replace(
      /(\d{2}):(\d{2}):(\d{2})([AP]M)/,
      function(match, hour, minute, second, period) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.period = period;
      }.bind(this)
    );
  }

  toMilitaryTime() {
    const standardHour = new StandardHour(
      this.hour,
      new StandardPeriod(this.period)
    );
    const militaryHour = standardHour.toMilitaryHour();

    return `${militaryHour}:${this.minute}:${this.second}`;
  }
}

class StandardPeriod {
  constructor(period) {
    this.period = period;
  }

  isAm() {
    return this.period === 'AM';
  }

  isPm() {
    return this.period === 'PM';
  }
}

class StandardHour {
  constructor(hour, standardPeriod) {
    this.hour = hour;
    this.standardPeriod = standardPeriod;
  }

  isMidnightHour() {
    return this.hour === '12' && this.standardPeriod.isAm();
  }

  isNoonHour() {
    return this.hour === '12' && this.standardPeriod.isPm();
  }

  toMilitaryHour() {
    if (this.isMidnightHour()) return '00';
    if (this.standardPeriod.isAm() || this.isNoonHour()) return this.hour;

    return `${+this.hour + 12}`;
  }
}

module.exports = { timeConversion };
