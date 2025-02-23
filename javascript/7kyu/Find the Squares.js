// https://www.codewars.com/kata/60908bc1d5811f0025474291

// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
// Examples

// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"

function findSquares(n) {
    const i = (n - 1) / 2;
    return ((i + 1) ** 2)+ '-' + (i ** 2);
}