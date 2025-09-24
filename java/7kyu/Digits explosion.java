// https://www.codewars.com/kata/585b1fafe08bae9988000314

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. 

public class Solution {
  public static String explode(String digits) {
    String result = "";
    for (int i = 0; i < digits.length(); i++){
      int digit = Character.getNumericValue(digits.charAt(i));
      for(int j = 0; j < digit; j++) {
        result += digit;
      }
    }
    return result;
  }
}