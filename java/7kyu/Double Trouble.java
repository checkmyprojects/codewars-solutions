// https://www.codewars.com/kata/57f7796697d62fc93d0001b8

// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
// Example:
// x = [1, 2, 3, 4, 5]
// t = 3
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
// [1, 3, 4, 5]
// Work through the array from left to right.
// Return the resulting array.

public class Solution {
  public static int[] trouble(int[] x, int t) {
    for (int i = 0; i < x.length - 1; i++) {
      if (x[i] + x[i + 1] == t) {
        int[] result = new int[x.length - 1];
        for (int j = 0, k = 0; j < x.length; j++) {
          if (j != i + 1) {
            result[k++] = x[j];
          }
        }
        return trouble(result, t);
      }
    }
    return x;
  }
}