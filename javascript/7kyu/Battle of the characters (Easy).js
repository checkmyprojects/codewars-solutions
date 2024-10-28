// https://www.codewars.com/kata/595519279be6c575b5000016

// Description:

// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
// Rules:

//     Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
//     Strings will consist of uppercase letters only
//     Only two groups to a fight.
//     Group whose total power (A + B + C + ...) is bigger wins.
//     If the powers are equal, it's a tie.

// Examples:

//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"

function battle(x, y) {
    a = x.split("").map(z => z.charCodeAt(0)-64).reduce((a,b) => a+b, 0)
    b = y.split("").map(z => z.charCodeAt(0)-64).reduce((a,b) => a+b, 0)
    return a < b ? y : a > b ? x : "Tie!"
  }