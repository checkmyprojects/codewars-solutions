// Your task is to sum the differences between consecutive pairs in the array in descending order. 

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

import java.util.Arrays;

public class ZywOo {
  public static int sumOfDifferences(int[] arr) {
    Arrays.sort(arr);
		return arr.length <= 1 ? 0 : arr[arr.length-1] - arr[0];
  }
}