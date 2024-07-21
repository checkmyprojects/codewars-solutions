// https://www.codewars.com/kata/559cc2d2b802a5c94700000c

// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

function consecutive(arr) {
    var sorted = arr.sort(function(a, b) {return a-b;});
    var count = 0;
    for (var i = 0; i < sorted.length - 1; i++) {
      var diff = sorted[i+1] - sorted[i]
      if (diff > 1) {
        count += diff - 1
      }  
    }
    return count;
  }