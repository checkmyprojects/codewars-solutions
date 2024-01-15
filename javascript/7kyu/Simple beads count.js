// https://www.codewars.com/kata/58712dfa5c538b6fc7000569

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
    if (n === 1 || n === 0) {
      return 0;
    }
    else  {
      return n + (n-2);;
    }
  }