// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...

function halvingSum(n) {
    var sum = 0;
    while(n > 0) {
      sum += n;
      n = Math.floor(n / 2);
    }
    return sum;
  }