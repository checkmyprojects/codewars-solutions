// https://www.codewars.com/kata/559cc2d2b802a5c94700000c

// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

import java.util.Arrays;
public class Kata {
    public static int consecutive(final int[] arr) {
      if (arr.length == 0) return 0;
      Arrays.sort(arr);
        return arr[arr.length - 1] - arr[0] - arr.length + 1;
    }
}