// https://www.codewars.com/kata/5596700a386158e3aa000011

// Given two numbers m and n, such that 0 ≤ m ≤ n :

//     convert all numbers from m to n (inclusive) to binary
//     sum them as if they were in base 10
//     convert the result to binary
//     return as a string

const BinaryPyramid = (m, n) => {
    let sum = 0;
    for (let i = m; i <= n; i++) 
      sum += +i.toString(2);
    return sum.toString(2);
  }