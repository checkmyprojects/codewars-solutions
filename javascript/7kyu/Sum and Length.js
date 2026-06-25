//https://www.codewars.com/kata/571965ccdf7fdb10a00000ea/train/javascript

// In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.

// Knowing that the first 0 is negative, the second is positive, the third is negative, and so on...

function sumLength(arr) {
    let positiveSum = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];

        if (curr === 0) {
            zeroCount++;
        } else if (curr > 0) {
            positiveSum += curr;
        } else {
            negativeCount++;
        }
    }

    return `${positiveSum} ${negativeCount + Math.ceil(zeroCount / 2)}`;
}
