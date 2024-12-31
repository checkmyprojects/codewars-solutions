// https://www.codewars.com/kata/58845748bd5733f1b300001f

// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

function rangeBitCount(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) 
        sum += i.toString(2).split('1').length - 1;
    
    return sum;
}