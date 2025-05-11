// https://www.codewars.com/kata/57741d8f10a0a66915000001

// Write a function that accepts two arguments: an array/list of integers and another integer (n).

// Determine the number of times where two integers in the array have a difference of n.

const intDiff = (arr, n) => {
    let count = 0;
    for (let i = 0; i<arr.length-1; i++){
      for (let j = i+1; j<arr.length; j++){
        if (Math.abs(arr[j]-arr[i]) == n) count++;
      }
    }
    return count;
  }