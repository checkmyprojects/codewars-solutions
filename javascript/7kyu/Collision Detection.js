// https://www.codewars.com/kata/599da159a30addffd00000af

// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }

// If a collision is detected, return true. If not, return false.

function collision(x1, y1, r1, x2, y2, r2) {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + r2) ** 2
}