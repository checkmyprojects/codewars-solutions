// https://www.codewars.com/kata/69aaedd9d5944360bfcb9fed

// Given coordinates of three points on a circle outline A, B and C, determine if point C belongs to the arc from A to B.

// Consider following context:

//     Coordinates are measured in degrees counterclockwise from the rightmost point (negative for clockwise direction). Multiple coordinate values may correspond to a same point.
//     Arc is shortest counterclockwise path along the circle from one point (arc start) to another (arc end).
//     Both ends of an arc are considered its parts.

// Conditions:

//     all coordinates are integer
//     coordinates are NOT limited to 0..360 and may be negative

// Examples:

//     Let A = 0 (right), B = 180 (left), C = 90 (top). Counterclockwise path from right to left goes through top, so correct answer is true.
//     Let A = 90 (top), B = -45 (bottom-right), C = 45 (top-right). Since arc is defined as counterclockwise (not always just shortest) path, C from lesser part of the circle is actually outside the arc and correct answer is false.
//     Let A = -135 (bottom-left), B = 405 (top-right), C = 45 (top-right). Points B and C have same position on the circle despite having different coordinates. Since end of an arc is considered its part, the correct answer is true.
//     Let A = 90 (top), B = 450 (top), C = 0 (right). Arc start and end are actually the same point, so the arc consists of a single point and any other point on the circle doesn't belong to it. The correct answer is false.

function belongsToArc(a, b, c) {
    const normalize = (n) => ((n % 360) + 360) % 360;
  
    const start = normalize(a);
    const arc = normalize(normalize(b) - start);
    const point = normalize(normalize(c) - start);
  
    return point <= arc;
  }