// Write a function that takes the website date/time in its original string format and returns the shortened format.

// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

public class Solution {
  public static String shortenToDate(String longDate) {
    return longDate.split(",")[0];
  }
}