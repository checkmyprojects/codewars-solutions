// https://www.codewars.com/kata/5913152be0b295cf99000001

// Calculate how many times a number can be divided by a given number.
// Example

// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1

const divisions = (n, d) => {
    var c=0;
    while (n>=Math.pow(d,c+1))
      c++;
    return c;
  };