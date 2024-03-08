// https://www.codewars.com/kata/55e6f5e58f7817808e00002e

// Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.

function seven(m) {
    var steps = 0;
    while (m > 99){
      m = Math.floor(m / 10) - 2 * (m % 10);
      ++steps;
    };
    return [m, steps];
}