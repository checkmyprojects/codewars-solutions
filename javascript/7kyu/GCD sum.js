// https://www.codewars.com/kata/5dd259444228280032b1ed2a

// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1} in Java and Golang).

function solve(x, y) {
    return x % y ? -1 : [y, x - y];
  }