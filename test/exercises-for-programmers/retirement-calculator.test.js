const { calculateRetirement } = require('../../src/exercises-for-programmers/retirement-calculator');

describe('calculateRetirement', () => {
  it('calculates the retirement year based on current age', () => {
    const currentAge = 25;
    const retirementAge = 65;
    const yearsToRetirement = retirementAge - currentAge;
    const currentYear = new Date().getFullYear();
    const retirementYear = currentYear + yearsToRetirement;
    const expected = `You have ${yearsToRetirement} year(s) to retire.\nIt's ${currentYear}, so you can retire in ${retirementYear}`;

    expect(calculateRetirement(currentAge, retirementAge)).toBe(expected);
  });

  describe("person's current age is same as retirement age", () => {
    it('indicates when a person is already eligible for retirement', () =>{
      const currentAge = 65;
      const retirementAge = 65;
      const expected = 'You can retire now.';

      expect(calculateRetirement(currentAge, retirementAge)).toBe(expected);
    });
  });

  describe("person's current age is greater than retirement age", () => {
    it('indicates when a person is already eligible for retirement', () =>{
      const currentAge = 70;
      const retirementAge = 65;
      const expected = 'You can retire now.';

      expect(calculateRetirement(currentAge, retirementAge)).toBe(expected);
    });
  });
});
