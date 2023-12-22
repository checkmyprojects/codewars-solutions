// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
        newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
}