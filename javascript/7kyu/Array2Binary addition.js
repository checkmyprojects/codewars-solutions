// https://www.codewars.com/kata/559576d984d6962f8c00003c

// Given an array containing only integers, add all the elements and return the binary equivalent of that sum.
// If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.
// Note: The sum of an empty array is zero.

function arr2bin(arr) {
    if (arr.length === 0) { return "0" }
    let sum = 0
    for (let i of arr) {
        if (typeof i !== "number" || i !== (i | 0)) { return false }
        sum += i
    }
    return sum.toString(2)
}