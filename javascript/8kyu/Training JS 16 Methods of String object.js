// https://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
    var smallest = arr[0].length;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest) {
        smallest = arr[i].length;
      }
    }
    var map = arr.map(function(x) {
      return x.slice(0, smallest);
    });
    return map;
  };