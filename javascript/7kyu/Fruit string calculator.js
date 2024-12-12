// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3

// You are given a string of words and numbers. Extract the expression including:

//     the operator: either addition ("gains") or subtraction ("loses")
//     the two numbers that we are operating on

// Return the result of the calculation.

// Notes:

//     "loses" and "gains" are the only two words describing operators
//     No fruit debts nor bitten apples = The numbers are integers and no negatives

function calculate(string) {
    if(string.split(' ')[5]==='loses'){
      return +string.split(' ')[2] - +string.split(' ')[6]
    }
    return +string.split(' ')[2] + +string.split(' ')[6]
  }