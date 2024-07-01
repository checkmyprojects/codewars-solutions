// https://www.codewars.com/kata/58841cb52a077503c4000015

// Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.

function circleOfNumbers(n, firstNumber) {
    return (firstNumber + n/2) % n
}