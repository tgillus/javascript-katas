const calculateRetirement = (currentAge, retirementAge) => {
  const yearsToRetirement = retirementAge - currentAge;

  if (yearsToRetirement < 1) return 'You can retire now.';

  const currentYear = new Date().getFullYear();
  const retirementYear = currentYear + yearsToRetirement;

  return `You have ${yearsToRetirement} year(s) to retire.\nIt's ${currentYear}, so you can retire in ${retirementYear}`;
};

module.exports = { calculateRetirement };
