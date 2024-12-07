// https://www.codewars.com/kata/5497a3c181dd7291ce000700

// Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

function diagonalSum(matrix){
    var sum = 0;
    for(var i = 0, width = matrix.length; i < width; i++) {
        sum += matrix[i][i];
    }
    return sum;
}