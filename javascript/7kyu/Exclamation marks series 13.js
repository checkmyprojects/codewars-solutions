// https://www.codewars.com/kata/57fb142297e0860073000064

// Count the number of exclamation marks and question marks, return the product.

function product(s){
    var first = 0;
    var second = 0;
    for(const elem of s){
      if(elem == '!'){
        first++;
      }
      else {
        second++;
      }
    }
    return first * second;
  }