// Check Nums - https://www.coderbyte.com/information/Check%20Nums

// Have the function CheckNums(num1,num2) take both parameters being passed and
// return the string true if num2 is greater than num1, otherwise return the
// string false. If the parameter values are equal to each other then return
// the string -1. 

const { checkNums } = require('../../src/coderbyte/check-nums');

describe('chechNums', () => {
  it('retuns true if second argument is greater than first argument', () => {
    expect(checkNums(1, 2)).toEqual('true');
  });

  it('returns false if second argument is less than first argument', () => {
    expect(checkNums(2, 1)).toEqual('false');
  });

  it('returns -1 if arguments are equal', () => {
    expect(checkNums(1, 1)).toEqual('-1');
  });
});
