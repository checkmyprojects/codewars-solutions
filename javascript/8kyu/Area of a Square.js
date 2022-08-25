// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A){
    return Number(Math.pow(2 * A / Math.PI, 2).toFixed(2))
}