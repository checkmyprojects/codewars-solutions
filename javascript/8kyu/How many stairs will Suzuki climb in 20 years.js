// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

function stairsIn20(s){
    let total = 0;
      for (let d of s) {
          for (let s of d) {
              total += s;
            }
        }
      return total * 20;
  }