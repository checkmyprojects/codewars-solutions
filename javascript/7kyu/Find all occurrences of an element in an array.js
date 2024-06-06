// https://www.codewars.com/kata/59a9919107157a45220000e1

// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

const findAll = (array, n) => {
    let a = []; array.forEach((v,i)=>{if(v===n){a.push(i)}})
    return a
}