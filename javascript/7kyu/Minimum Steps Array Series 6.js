// https://www.codewars.com/kata/5a91a7c5fd8c061367000002

// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Notes:
//     List size is at least 3.
//     All numbers will be positive.
//     Numbers could occur more than once , (Duplications may exist).
//     Threshold K will always be reachable.

function minimumSteps(numbers, value) {
    const nums = numbers.slice().sort((a, b) => a - b);
    for (let i = 0, sum = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum >= value) {
        return i;
      }
    }
  }