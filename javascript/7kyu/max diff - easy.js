// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

const maxDiff = (list) => {
    if (list.length <= 1) {
      return 0;
    }
    
    let min = list[0];
    let max = list[0];
    
    for (let i = 1; i < list.length; i++) {
      const current = list[i];
      min = Math.min(min, current);
      max = Math.max(max, current);
    }
    
    return max - min;
  };