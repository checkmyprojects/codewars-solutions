// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

public class Solution {
  public static int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
      sum += n % 10;
      n /= 10;
    }
    return sum;
  }
}