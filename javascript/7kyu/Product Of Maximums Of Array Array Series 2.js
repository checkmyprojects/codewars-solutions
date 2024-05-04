// https://www.codewars.com/kata/5a63948acadebff56f000018

// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes

//     Array/list size is at least 3 .
//     Array/list's numbers Will be mixture of positives , negatives and zeros
//     Repetition of numbers in the array/list could occur.

function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
}