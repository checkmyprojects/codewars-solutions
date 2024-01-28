// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i <arr.length; i++){
      var cubed = (arr[i]*arr[i]*arr[i]);
      if (isNaN(cubed)) return undefined;
      if(cubed % 2 != 0 )sum += cubed;
    }
    return sum;
  }