// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4

// Task

// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
// Notes

// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty. 

const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))