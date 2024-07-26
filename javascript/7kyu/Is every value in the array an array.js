// https://www.codewars.com/kata/582c81d982a0a65424000201

// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays. 
const arrCheck = a => a.every(Array.isArray) ;