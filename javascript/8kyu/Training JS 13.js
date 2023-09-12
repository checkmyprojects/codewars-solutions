// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n){
    switch (true) {
      case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
      case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
      case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
      case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
      case (isNaN(n)): return "Input number is Number.NaN";
      default: return "Input number is " + n;
    }
  }