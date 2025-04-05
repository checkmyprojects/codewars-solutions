// https://www.codewars.com/kata/55c606e6babfc5b2c500007c

// Your task is to fix the Filter Number function to remove all the numbers from the string

var FilterNumbers = function(str) {
    return str.split('').filter(c => isNaN(c)).join('');
}