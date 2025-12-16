// https://www.codewars.com/kata/5dd5128f16eced000e4c42ba

// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'

class Solution{
  public static char solve(String s) {
    char ret = '?';
    int hi = 0;
    for (char c = 'z'; c >= 'a'; c--) {
      int a = s.indexOf(c), b = s.lastIndexOf(c);
      if (a >= 0 && (b-a) >= hi) { hi = (b-a); ret = c; }
    }
    return ret;
  }
}