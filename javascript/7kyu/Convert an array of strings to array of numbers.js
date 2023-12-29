// https://www.codewars.com/kata/5783d8f3202c0e486c001d23

// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

function toNumberArray(stringarray){
    return stringarray.map(Number);
}