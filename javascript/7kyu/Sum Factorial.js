// https://www.codewars.com/kata/56b0f6243196b9d42d000034

// Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.

// Here are a few examples of factorials:

// 4 Factorial = 4! = 4 * 3 * 2 * 1 = 24

// 6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

// In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

// For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.

function sumFactorial(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let factorial = 1;
      for (let j = num; j > 0; j--) {
        factorial *= j;
      }
      total += factorial;
    }
    return total;
  }