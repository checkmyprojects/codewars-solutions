// https://www.codewars.com/kata/588e27b7d1140d31cb000060

// Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

// 0 <= a <= b <= n

// The pairs should be sorted by increasing values of a then increasing values of b.

const generatePairs = function(n) {
    const arr = []
    for (let i=0; i <= n; i++){
      for (let j=i; j <= n; j++){
        arr.push([i,j])
      }
    }
    return arr
  }