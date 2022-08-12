// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// https://www.codewars.com/kata/569e09850a8e371ab200000b

function preFizz(n) {
    let result = [];
    let num = 1;
    while(result.length  < n){
        result.push(num);
        num += 1;
    }
    return result;
}