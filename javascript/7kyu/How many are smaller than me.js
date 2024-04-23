// https://www.codewars.com/kata/56a1c074f87bc2201200002e

// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

function smaller(nums) {
    let count;
    let base;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
      base = nums[i];
      count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < base) count++;
      }
      arr.push(count);
    }
    return arr;
  }