// https://www.codewars.com/kata/5844a422cbd2279a0c000281

// Debug the functions
// Should be easy, begin by looking at the code. Debug the code and the functions should work.
// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
    return arr.reduce((a, b) => a * b)
}

function add(arr) {
    return arr.reduce((a, b) => a + b)
}

function reverse(str) {
    return str.split('').reverse().join('')
}