// https://www.codewars.com/kata/5592fc599a7f40adac0000a8

// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary).
// Example

// [   // 3x3 matrix
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ]

// // Should return 30: (1 + 5 + 9) + (3 + 5 + 7)

function sum(matrix) {  
    if (!matrix.length) return 0;
    for (var i = 0, j = 0, k = matrix[i].length - 1, sum = 0; i < matrix.length; i++) {
      sum += matrix[i][j++] + matrix[i][k--];
    }
    return sum;
  }