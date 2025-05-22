// https://www.codewars.com/kata/58a66c208b88b2de660000c3

// You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

function missingValues(a) {
    const x = a.find( v => a.filter( w => v===w ).length===1 );
    const y = a.find( v => a.filter( w => v===w ).length===2 );
    return x*x*y;
}