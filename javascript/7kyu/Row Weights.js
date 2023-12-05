// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Array size is at least 1.
// All numbers will be positive.

function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
        i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}