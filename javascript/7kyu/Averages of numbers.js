// https://www.codewars.com/kata/57d2807295497e652b000139

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
// If the array has 0 or 1 values or is null, your method should return an empty array.

function averages(numbers) {
    var final = [];
    if (numbers) {
      for (var i=0; i<numbers.length-1; i++) {
        final.push((numbers[i] + numbers[i+1]) / 2);
      }
    }
    return final;
  }