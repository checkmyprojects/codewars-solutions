// https://www.codewars.com/kata/588e2a1ad1140d31cb00008c

// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

// The input m will always be smaller than or equal to n (e.g., m <= n)

function generatePairs(m, n) {
    let result = [];
    for (let i = m; i <= n; i++)
      for (let j = i; j <= n; j++)
        result.push([i, j]);
    return result;
  }