// https://www.codewars.com/kata/65ba420888906c1f86e1e680

// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

function collinearity(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
    if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0) || (y1 === 0 && y2 === 0) || (y1 !== 0 && y2 !== 0 && x1 / y1 === x2 / y2)) {
      return true;
    } else {
      return false;
    }
  }