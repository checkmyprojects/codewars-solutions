// https://www.codewars.com/kata/602db3215c22df000e8544f0

// Task:

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

function twoArePositive(a, b, c) {
    let num = 0;
    if(a > 0){
      num++
    } if(b > 0){
      num++
    } if(c > 0){
      num++
    }
    return num === 2
  }