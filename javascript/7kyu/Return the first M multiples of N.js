// https://www.codewars.com/kata/593c9175933500f33400003e

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

function multiples(m, n){
    var arr=[];
    for (var i=1; i<=m; ++i)
      arr.push(n*i);
    return arr;
}