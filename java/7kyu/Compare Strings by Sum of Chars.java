// https://www.codewars.com/kata/576bb3c4b1abc497ec000065

// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.

public class Kata {

  public static boolean compare(String s1, String s2) {
  
    if (s1 == null || !s1.matches("[a-zA-Z]+")) s1 = "";
    if (s2 == null || !s2.matches("[a-zA-Z]+")) s2 = "";
    
    return s1.toUpperCase().chars().sum() == s2.toUpperCase().chars().sum();
  }
}