// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] % 2 == 0 ? sum += input[i] : 0;
    };
    return sum;
}