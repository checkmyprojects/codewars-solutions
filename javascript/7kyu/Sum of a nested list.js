// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018

// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

const sumNested = arr => {
    if (Array.isArray(arr)) {
      return arr.reduce(function(accumulator, currentValue) {
        return accumulator + sumNested(currentValue);
      }, 0);
    } else {
      return arr;
    }
};