// https://www.codewars.com/kata/514a6336889283a3d2000001

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })
}