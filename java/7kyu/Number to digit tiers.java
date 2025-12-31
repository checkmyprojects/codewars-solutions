// https://www.codewars.com/kata/586bca7fa44cfc833e00005c

// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

public class Solution {
  public static String[] createArrayOfTiers(int num) {
    String[] result = new String[(num + "").length()];
    for (int i = 0; i < result.length; i ++) {
      result[i] = (num + "").substring(0, i + 1);
    }
    return result;
  } 
}