// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

// You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

function oddOnesOut(nums) {

    const results = {};
    nums.forEach(num => {
      if (results[num]) {
        results[num]++
      } else {
        results[num] = 1
      }
    });
    return nums.filter(el => results[el] % 2 === 0)
}