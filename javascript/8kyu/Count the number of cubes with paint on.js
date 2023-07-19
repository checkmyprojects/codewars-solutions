// https://www.codewars.com/kata/5763bb0af716cad8fb000580

var countSquares = function(cuts){
    if(cuts===0){
      return 1
    }
    let innerCube = Math.pow(cuts-1,3)
    let outerCube = Math.pow(cuts+1,3)
    return outerCube-innerCube
  }