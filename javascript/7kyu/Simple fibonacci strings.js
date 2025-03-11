// https://www.codewars.com/kata/5aa39ba75084d7cf45000008

// Given that

// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// f3 = '01001' = f2 + f1

// You will be given a number and your task is to return the nth fibonacci string. For example:

// solve(2) = '010'
// solve(3) = '01001'

function solve(n) {
    let f = ['0', '01'],
       str = '';
    for (let i = 1; i < n; i++) {
      f.push(f[i] + f[i - 1]);
    }
    return f[n];
  }