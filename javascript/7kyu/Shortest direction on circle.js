// https://www.codewars.com/kata/686fd320adc800ab627089c2

// Given coordinates of two points A and B on a circle determine what is the shortest direction from A to B.

// To be clear with context, let's make some definitions:

//     Direction on a circle is number of degrees to advance along the circle from a point counterclockwise (positive sign) or clockwise (negative sign).
//     Length of a direction is its absolute value.
//     A point coordinate is value of a direction to the point from the rightmost circle point.
//     As any number of full turns doesn't change actual point position, with this definition multiple coordinates may correspond to a same point.

// Conditions:

//     coordinates are integer
//     coordinates are NOT limited to 0..360 and may be negative

// Examples:

//     With A at 0 (right) and B at 90 (top) the shortest direction is counterclockwise +90.
//     If points are swapped in the previous example, the shortest direction is flipped to -90.
//     With A at 180 (left) and B at -450 (bottom) the shortest direction is counterclockwise +90.
//     With A at 90 (top) and B at 270 (bottom) both 180 and -180 are correct.

function shortestDirection(a, b) {
    const wrap = n => (n < 0) * 360 + (n % 360);
    return wrap(wrap(b) - wrap(a) + 180) - 180;
}