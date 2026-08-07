// https://www.codewars.com/kata/5ff2093d375dca00170057bc

// You are given an array of 6-faced dice. Each die is represented by its face up.

// Calculate the minimum number of rotations needed to make all faces the same.

// 1 will require one rotation to have 2, 3, 4 and 5 face up, but would require two rotations to make it the face 6, as 6 is the opposite side of 1.

// The opposite side of 2 is 5 and 3 is 4.
// Examples

// dice = {1, 1, 1, 1, 1, 6} --> 2:
// rotate 6 twice to get 1

// dice = {1, 2, 3} --> 2:
// 2 rotations are needed to make all faces either 1, 2, or 3

// dice = {3, 3, 3} --> 0:
// all faces are already identical

// dice = {1, 6, 2, 3} --> 3:
// rotate 1, 6 and 3 once to make them all 2

function rotations(dieArray) {
    console.log(dieArray);
  
    const possiblities = [1, 2, 3, 4, 5, 6].map((target) => {
      let temp = 0;
      dieArray.forEach((number) => {
        temp += calcRequiredRotationForTarget(number, target);
      });
  
      return temp;
    });
    console.log("possiblities", possiblities);
  
    return Math.min(...possiblities);
  }
  
  function calcRequiredRotationForTarget(number, target) {
    if (number === target) return 0;
  
    if (number === 1 && target === 6) {
      return 2;
    }
    if (number === 2 && target === 5) {
      return 2;
    }
    if (number === 3 && target === 4) {
      return 2;
    }
  
    if (number === 6 && target === 1) {
      return 2;
    }
    if (number === 5 && target === 2) {
      return 2;
    }
    if (number === 4 && target === 3) {
      return 2;
    }
    return 1;
  }