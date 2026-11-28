// https://www.codewars.com/kata/5579906f2f0c0d0766000127

// The Problem

// Your colleague has been working on a program that returns the number of days of holiday that people in your coding company can take in the remainder of the year.

// His program outputs the number of holidays each employee has left as an integer within an array. However, the program is not working properly. Alongside the element that specifies the number of holidays are several other useless elements. These other elements are of a variety of data types and none are integers.

// Your colleague boasts that he has more days of holiday left than you.
// Your Task

// You are given two arrays, a1 (your colleague's) and a2 (yours), which contains at most one integer: the number of days of holiday that person has left.

// If your colleague is telling the truth, the function should return the string "Right". If your colleague is wrong, the function should return the string "Wrong". If you both have the same number of days of holiday, the function should return the string "Same". If your colleague's program is beyond repair and does not produce an integer in either arrays, the function should return a string "Not possible".

function holidayCount(a, b) {
  
  const F = arr => arr.find(Number.isInteger);
  
  const s = Math.sign(F(a) - F(b))
  
  switch (s) {
    case +1: return 'Right';
    case  0: return 'Same';
    case -1: return 'Wrong';
    default: return 'Not possible';
  }

}