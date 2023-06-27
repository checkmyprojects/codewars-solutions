// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// https://www.codewars.com/kata/572b77262bedd351e9000076

function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
  }