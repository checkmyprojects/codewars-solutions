// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// https://www.codewars.com/kata/57faf7275c991027af000679

function remove(s,n){
    while (n-- > 0) s = s.replace("!", "");
    return s;
  }