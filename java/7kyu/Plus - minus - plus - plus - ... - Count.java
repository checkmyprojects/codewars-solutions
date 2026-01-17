// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

// Count how often sign changes in array.
// result

// number from 0 to ... . Empty array returns 0

public class Solution {

  public static int signChange(int[] arr) {
    int count = 0;
    for (int i = 1; i < arr.length; i++) {
      if ((arr[i] >= 0 && arr[i - 1] < 0)||(arr[i] < 0 && arr[i - 1] >= 0)) count++;
    }
    return count;
  }

}