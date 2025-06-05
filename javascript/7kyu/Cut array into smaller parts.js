// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150

// Write a function that takes two arguments:

//     An array: The array to be split into smaller parts.
//     Chunk size: A positive integer, which is the size of each chunk.

// This function should split the given array into parts with the given chunk size, and return the result as a nested array.

// If the array cannot be evenly divided by the size, the last part may contain fewer elements.

// If an array of size 123 is given and the chunk size is 10, the function will split the array into 13 smaller parts:

//     The first 12 parts will each have a size of 10.
//     The final part will contain the remaining 3 elements.

function makeParts(arr, chunkSize) {
	let newArr = [];
  while (arr.length > 0){
    newArr.push(arr.splice(0, chunkSize));
    }
  return newArr;
}