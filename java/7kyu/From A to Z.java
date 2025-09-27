// https://www.codewars.com/kata/6512b3775bf8500baea77663

// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

public class Solution{
  public static String gimmeTheLetters(String s){  
     StringBuilder sb = new StringBuilder();
     for (char c = s.charAt(0); c<=s.charAt(2); c++) 
         sb.append(c);
     return sb.toString();
    }
}