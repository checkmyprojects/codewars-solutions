// https://www.codewars.com/kata/56853c44b295170b73000007

// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
// Your function should return true if all elements in the array are square numbers and false if not.
// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

var isSquare = function(arr){
    return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
}