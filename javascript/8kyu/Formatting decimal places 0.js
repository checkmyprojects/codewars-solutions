// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// https://www.codewars.com/kata/5641a03210e973055a00000d

function twoDecimalPlaces(n) {
    return (Math.round(n*100))/100.0;
  }