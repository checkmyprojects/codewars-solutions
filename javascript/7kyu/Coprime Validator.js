// https://www.codewars.com/kata/585c50e75d0930e6a7000336

// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

function isCoprime(x, y) {
    const min = Math.min(x, y);
    
    for (let i = 2; i <= min; i++) {
      if (x % i === 0 && y % i === 0) {
        return false;
      }
    }
    
    return true;
  }