// https://www.codewars.com/kata/58e0cb3634a3027180000040

// Sort an array by value and index

// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

function sortByValueAndIndex(array) {
    return array
          .map((x, i) => [x, x * i + x])
          .sort((a, b) => a[1] - b[1])
          .map((a) => a[0])
  }