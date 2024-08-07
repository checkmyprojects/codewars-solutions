// https://www.codewars.com/kata/56b1eb19247c01493a000065

// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

function uniqueSum(lst){
    return [...new Set(lst)].reduce((a,b)=>a+b,null);
}