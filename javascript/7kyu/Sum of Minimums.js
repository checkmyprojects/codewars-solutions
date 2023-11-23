// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += Math.min(...arr[i])
    }
    return total;
}