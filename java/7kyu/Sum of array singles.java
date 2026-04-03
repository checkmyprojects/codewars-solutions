// https://www.codewars.com/kata/59f11118a5e129e591000134

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

import java.util.Set;
import java.util.HashSet;

class Solution{
    public static int repeats(int [] arr) {
      Set<Integer> numbers = new HashSet<>();
      int sum = 0;
      for (int num : arr) {
        if (numbers.contains(num)) {
          sum = sum - num;
        } else {
          sum = sum + num;
          numbers.add(num);
        }
      }
      return sum;
    }
}