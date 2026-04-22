// https://www.codewars.com/kata/5a87449ab1710171300000fd

// A Tidy number is a number whose digits are in non-decreasing order.
// Given a number, Find if it is Tidy or not . 

public class Solution {

    public static boolean tidyNumber(int n) {
      final String[] digits = (""+n).split("");
      java.util.Arrays.sort(digits);
      return String.join("",digits).equals(""+n);
    }
    
}