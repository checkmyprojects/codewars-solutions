// https://www.codewars.com/kata/5ac5e9aa3853da25d9000102

// It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given sequences of integers and give the resulting ORed array (starts to sound like a tonguetwister, doesn't it?).

// If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

// For example:

// arr1 = [1,2,3]
// arr2 = [1,2,3] 
// // Should return [1,2,3]

// arr1 = [1,2,3]
// arr2 = [4,5,6] 
// // Should return [5,7,7]

// arr1 = [1,2,3]
// arr2 = [1,2] 
// // Should return [1,2,3]

// arr1 = [1,2]
// arr2 = [1,2,3] 
// // Should return [1,2,3]

// arr1 = [1,2,3]
// arr2 = [1,2,3]
// // with a third parameter = 3
// // Should return [1,2,3]

function orArrays(arr1, arr2, defaultValue = 0) {
  let a = [...arr1, ...Array(Math.max(arr2.length - arr1.length, 0)).fill(defaultValue)];
  let b = [...arr2, ...Array(Math.max(arr1.length - arr2.length, 0)).fill(defaultValue)];
  return a.map((a, i) => a | b[i]);
}