// https://www.codewars.com/kata/5546180ca783b6d2d5000062

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x, n) {
    let arr = [];
    if(n === 0 || n < 0) return arr;
    for(let i = x; arr.length < n; i*=i) {
        arr.push(i);
    }
    return arr
}