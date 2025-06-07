// https://www.codewars.com/kata/596f6385e7cd727fff0000d6

// Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes. 

function avgArray(arr) {
    var result=[];
    for(var i in arr[0]){
      var num=0;
      for(var j in arr){
        num+=arr[j][i];
      }
      result.push(num/arr.length);
    }
    return result;
  }