// https://www.codewars.com/kata/558f9f51e85b46e9fa000025

// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

function differenceOfSquares(x){
    var sum = 0, squareSum = 0, i;
    for (i =1 ; i <= x; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }