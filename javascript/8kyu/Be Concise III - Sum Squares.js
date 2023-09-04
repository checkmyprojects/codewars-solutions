// https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7

function sumSquares(array) {
    return array.reduce((a,b) => a + b ** 2, 0);
}