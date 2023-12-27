// https://www.codewars.com/kata/525e5a1cb735154b320002c8

// You need to return the nth triangular number. You should return 0 for out of range values:

function triangular( n ) {
    return n > 0 ? n * (n + 1) / 2 : 0;
}