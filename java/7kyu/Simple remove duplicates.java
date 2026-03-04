// https://www.codewars.com/kata/5ba38ba180824a86850000f7

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

import java.util.LinkedList;

interface Solution {
  static int[] solve(int[] arr) {
    var unique = new LinkedList<Integer>();
    for (int i = arr.length - 1; i >= 0; i--) {
      if (!unique.contains(arr[i])) {
        unique.addFirst(arr[i]);
      }
    }
    return unique.stream().mapToInt(i -> i).toArray();
  }
}