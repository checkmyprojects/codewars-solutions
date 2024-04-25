// https://www.codewars.com/kata/540c33513b6532cd58000259

// Write a function that finds the sum of all its arguments.

function sum() {
    var total = 0;
    for(var i in arguments){
      total += arguments[i];
    }
    return total;
  }