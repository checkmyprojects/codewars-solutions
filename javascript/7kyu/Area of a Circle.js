// https://www.codewars.com/kata/537baa6f8f4b300b5900106c

// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw IllegalArgumentException.

function circleArea(radius) {
    if (radius <= 0) {
        throw new Error("Радіус менше нуля");
    }
   let area = Math.PI * (radius * radius);
   return Math.trunc(area * 100) / 100;;
}