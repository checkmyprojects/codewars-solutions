// https://www.codewars.com/kata/57b68bc7b69bfc8209000307

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

function average(scores) {
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}