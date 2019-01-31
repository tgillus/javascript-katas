const timeConversion = (time) => {
  return StandardToMilitary.for(new StandardTime(time)).militaryTime;
};

class StandardTime {
  constructor(time) {
    [, this.hour, this.minute, this.second, this.period] = time.match(
      /(\d{2}):(\d{2}):(\d{2})([AP]M)/
    );
  }

  isMidnightHour() {
    return this.hour === '12' && this.period === 'AM';
  }

  isNoonHour() {
    return this.hour === '12' && this.period === 'PM';
  }

  isMorning() {
    return this.period === 'AM';
  }

  isAfternoon() {
    return this.period === 'PM';
  }
}

class StandardToMilitary {
  constructor(standardTime) {
    this.standardTime = standardTime;
    this.minute = standardTime.minute;
    this.second = standardTime.second;
  }

  get hour() {
    throw new Error('Cannot call abstract method');
  }

  get militaryTime() {
    return `${this.hour}:${this.minute}:${this.second}`;
  }

  static for(standardTime) {
    if (standardTime.isMidnightHour()) {
      return new StandardMidnightToMilitary(standardTime);
    }

    if (standardTime.isNoonHour() || standardTime.isMorning()) {
      return new StandardNoonOrMorningToMilitary(standardTime);
    }

    return new StandardAfternoonToMilitary(standardTime);
  }
}

class StandardMidnightToMilitary extends StandardToMilitary {
  get hour() {
    return '00';
  }
}

class StandardNoonOrMorningToMilitary extends StandardToMilitary {
  get hour() {
    return this.standardTime.hour;
  }
}

class StandardAfternoonToMilitary extends StandardToMilitary {
  get hour() {
    return `${+this.standardTime.hour + 12}`;
  }
}

module.exports = { timeConversion };
