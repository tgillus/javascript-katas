// Array.diff - https://www.codewars.com/kata/array-dot-diff/javascript

// Your goal in this kata is to implement a difference function, which
// subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

const arrayDiff = (array1, array2) => {
  return array1.filter(number => !array2.includes(number));
};

module.exports = { arrayDiff };
