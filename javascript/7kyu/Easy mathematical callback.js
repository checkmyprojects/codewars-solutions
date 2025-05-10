// https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf

// Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array. Optionally, also write tests similar to the examples below.

function processArray(arr, callback) {
    
    return arr.map(callback);
}