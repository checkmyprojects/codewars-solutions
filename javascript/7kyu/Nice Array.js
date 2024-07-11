// https://www.codewars.com/kata/59b844528bcb7735560000a0

// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

function isNice(arr){
    return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}