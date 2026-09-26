// https://www.codewars.com/kata/57193a349906afdf67000f50

// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.

// Complete the function which accepts an array of integers and returns its magic sum of 3s.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If there is no such number in the array, 0 should be returned.

function magicSum(a) {
    return Array.isArray(a) ? a.reduce((a,b)=>a+((''+b).includes('3') && b%2 ? b : 0),0) : 0
}