// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc

// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]

function solution(n) {
    --n;
    const c15 = Math.floor(n / 15);
    const c3 = Math.floor(n / 3) - c15;
    const c5 = Math.floor(n / 5) - c15;
    return [c3, c5, c15];
  }