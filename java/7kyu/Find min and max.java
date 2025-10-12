// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130

// Implement a function that returns the minimal and the maximal value of a list (in this order).

import java.util.List;

class MinMax {
  static int[] getMinMax(List<Integer> list) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        for (int num : list) {
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
        }
        
        return new int[] {min, max};
  }
}