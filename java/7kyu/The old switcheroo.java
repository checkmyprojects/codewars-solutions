// https://www.codewars.com/kata/55d410c492e6ed767000004f

// Write a function
// vowel2Index(String s)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. 

public class Kata {
  public static String vowel2Index(String s) {
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < s.length(); i++) {
        if ("aeiouAEIOU".indexOf(s.charAt(i)) == -1) sb.append(s.charAt(i));
        else sb.append(i + 1);
      }
      return sb.toString();
  }
}