// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += +digits[ix];
    }
    return sum;
  }