// https://www.codewars.com/kata/5566b0dd450172dfc4000005

// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

function lengthOfSequence(arr, n){
    return arr.count(n) == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
}

Array.prototype.count = function(n){
    return this.filter(function(v){ return v == n }).length;
}