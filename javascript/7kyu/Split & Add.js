// https://www.codewars.com/kata/6ad9d7b972e1f78aca8b94f4

// A sequence satisfies the recurrence relation

//     am+n=am+an+y∗m∗n a_{m+n} = a_m + a_n + y * m * n am+n​=am​+an​+y∗m∗n

// for all non-negative integers m m m and n n n, where y y y is a fixed non-negative integer.

// Given: a1=1 a_1 = 1 a1​=1, regardless of the value of y y y

// Write a function that returns the value of ax a_x ax​ for given x,y x, y x,y.
// Constraints

// 0 ≤ x ≤ 10^8
// 0 ≤ y ≤ 10^4

function solve(x,y) {
  if (x === 0n) return 0n;
  return x + y * x * (x - 1n) / 2n;
}