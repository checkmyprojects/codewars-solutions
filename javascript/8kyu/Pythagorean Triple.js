// https://www.codewars.com/kata/5951d30ce99cf2467e000013

function isPythagoreanTriple(integers) {
  
    let a2 = integers[0]*integers[0];
    let b2 = integers[1]*integers[1];
    let c2 = integers[2]*integers[2];
    
    return a2 + b2 == c2 || a2 + c2 == b2 || b2 + c2 == a2 ? true : false;
  }