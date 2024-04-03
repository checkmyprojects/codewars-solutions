// https://www.codewars.com/kata/5250a89b1625e5decd000413

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

var flatten = function (array){
    var res = [];
    for(var i=0; i<array.length; i++) {
      var el = array[i];
      if(el instanceof Array) {
        for(var j=0; j<el.length; j++) {
          res.push(el[j]);
        }
      } else {
        res.push(el);
      }
    }
    return res;
}