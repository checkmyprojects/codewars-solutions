// https://www.codewars.com/kata/56eb0be52caf798c630013c0

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.

function unluckyDays(year){
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
      if(new Date(year, i, 13).getDay() === 5){
        unlucky++;
      }
    }
    return unlucky;
  }