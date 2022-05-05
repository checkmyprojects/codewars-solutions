// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// https://www.codewars.com/kata/583710ccaa6717322c000105

function simpleMultiplication(number) {
    // your code........
  if(number%2 === 0){
    return number*8
  }else{
    return number*9
  }
}