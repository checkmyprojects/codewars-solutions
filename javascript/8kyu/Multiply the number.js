// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers

// https://www.codewars.com/kata/5708f682c69b48047b000e07

function multiply(number){
    return number * Math.pow(5, Math.abs(number).toString().length);
  }