// https://www.codewars.com/kata/577a6e90d48e51c55e000217

var hotpo = function(n, acc = 0) {
    if (n <= 1) {
      return acc;
    } else {
      return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
    }
  }