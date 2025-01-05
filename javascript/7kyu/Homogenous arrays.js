// https://www.codewars.com/kata/57ef016a7b45ef647a00002d

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

function filterHomogenous(arrays) {
    return arrays.filter(arr => {
        if (arr.length && arr.every(elem => typeof elem === 'number'))  return arr 
        if (arr.length && arr.every(elem => typeof elem === 'string'))  return arr
    })
}