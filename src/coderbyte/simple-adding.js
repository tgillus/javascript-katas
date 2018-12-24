// Simple Adding - https://www.coderbyte.com/results/tgillus:Simple%20Adding:JavaScript

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For
// example: if the input is 4 then your program should return 10 because
// 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number
// from 1 to 1000. 

// The formula uses in this solution can be found here:
//   http://mathcentral.uregina.ca/qq/database/qq.02.06/jo1.html

const add = (number) => {
  return (number * (number + 1)) / 2;
};

module.exports = { add };