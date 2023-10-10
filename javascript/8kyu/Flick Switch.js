// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb

// Task

// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

function flickSwitch(arr){
    let flick = true
    return arr.map(item => item === 'flick'? flick = !flick: flick)
}