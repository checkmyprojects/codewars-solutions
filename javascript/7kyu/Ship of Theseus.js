// https://www.codewars.com/kata/69b83710b26939b35fd10429

// The "Ship of Theseus" is a classic philosophical thought experiment about identity over time.

// It asks: if every part of a ship is gradually replaced, one piece at a time, is it still the same ship in the end?

// This kata turns that idea into a simple validation problem.

// A ship is represented by a matrix of states.

// Each row shows the ship at a different moment in time.

// The ship is considered to remain the same only if, between every two consecutive rows, exactly one part of the ship has changed.
// Rules

//     All rows must have the same length.
//     Rows must be compared position by position.
//     Between one row and the next, exactly one element (ship part) must be different.
//     If any transition changes zero elements or more than one element, the process is invalid.

// Return true if the whole process is valid, otherwise return false.

// If the matrix has 0 or 1 row, return true.

function shipOfTheseus(ship) {
    return ship.every((a, i) => 
      i == 0 || (
        a.length == ship[i-1].length
        && a.filter((x, j) => x != ship[i-1][j]).length == 1
      )
    );
  }