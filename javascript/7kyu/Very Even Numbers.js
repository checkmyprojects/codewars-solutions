// https://www.codewars.com/kata/58c9322bedb4235468000019

// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

function isVeryEvenNumber(n) {
    if (n < 10 && n%2 === 0) return true
    if (n > 9) {
      return isVeryEvenNumber(String(n).split('').reduce((a,b) => +a + +b))
    }
    return false
  }