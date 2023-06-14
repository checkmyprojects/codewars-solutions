// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power){
    var total = 1;
    for (var i = 1; i <= power; i++) { 
      total = total * number;
    }
    return total;
  }