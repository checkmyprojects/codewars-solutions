// https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b

// Task

// Given the number n, return the sequence of numbers from n to 1.

// Range

// The number n can be negative and also large number:  -9999  <=  n  <=  9999

// Examples

// n =  5    >>     5, 4, 3, 2, 1
// n = -1    >>    -1, 0, 1

function seqToOne(n){
    const arr = [];
    
    while (n !== 1) {
      if (n > 1) {
        arr.push(n--);
      } else {
        arr.push(n++);
      }
    }
    arr.push(1);
    return arr;
}