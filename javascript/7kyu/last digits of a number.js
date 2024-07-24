// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0

// Your job is to implement a function which returns the last D digits of an integer N as a list.

function lastDigit(n, d) {
    const nums = String(n).split('').map(Number);
    const len = nums.length;
    let index = 0;
    return nums.filter(el => index++ >= len - d);
}