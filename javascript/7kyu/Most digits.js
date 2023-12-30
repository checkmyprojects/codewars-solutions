// https://www.codewars.com/kata/58daa7617332e59593000006

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].toString().length > longest.toString().length) longest = array[i];
  }
  return longest;
}