// https://www.codewars.com/kata/5a512f6a80eba857280000fc

// Given an array/list of integers, find the Nth smallest element in the array.

function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
}