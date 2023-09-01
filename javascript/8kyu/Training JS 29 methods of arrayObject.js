// https://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr){
  var result = []
    for (var i=0; i < arr.length; i++) 
      result = result.concat(arr[i]);

    function compare (a, b){
    if (a > b){
      return -1;
    } else if (a < b){
      return 1
    } else return 0
  }
  result = result.sort(compare)


  let joined = result.join('>')
  return joined

}