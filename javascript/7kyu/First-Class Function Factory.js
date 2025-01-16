// https://www.codewars.com/kata/563f879ecbb8fcab31000041

// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

// In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

function factory(x){
    return array => array.map( a => a*x );
}