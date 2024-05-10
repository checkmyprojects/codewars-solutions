// https://www.codewars.com/kata/589478160c0f8a40870000bc

// Area of an arrow
// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
// a and b are integers and > 0
// Write a function which returns the area of the arrow.

function arrowArea(a,b) {
    return a * b / 4;
  }