// https://www.codewars.com/kata/53d32bea2f2a21f666000256

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, new int[]{7, 6, 5, 4, 3, 2, 1})
// // => new int[]{6, 7}

function largest(n, array) {
    array.sort((a,b) => a - b)
    return array.slice(array.length-n);
}