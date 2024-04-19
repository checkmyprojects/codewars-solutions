// https://www.codewars.com/kata/5809b62808ad92e31b000031

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

function calculate(str) {
    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
  }