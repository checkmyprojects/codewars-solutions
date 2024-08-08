// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

const solve = (a, b) => {
    b.map(val => a.filter(v => v === val).length);
}