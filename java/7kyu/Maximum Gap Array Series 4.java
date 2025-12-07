// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form. 

public class Solution {
    public static int maxGap(int[] ary) {
      java.util.Arrays.sort(ary);
      int max = 0, prev = ary[0];
      for (int a : ary) { max = Math.max(a-prev, max); prev = a; }
      return max;
    }
}