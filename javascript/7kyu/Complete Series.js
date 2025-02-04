// https://www.codewars.com/kata/580a4001d6df740d61000301

// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

function completeSeries(arr) {
    let dup = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
    let arr1 = []
    if (dup.length > 0) return [0]
    else{
      for (let i = 0; i <= Math.max(...arr); i++){
      arr1.push(i)
      }
    }return arr1
}