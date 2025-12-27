// https://www.codewars.com/kata/5a512f6a80eba857280000fc

// Given an array/list of integers, find the Nth smallest element in the array.

import java.util.Arrays;
public class Kata {
    public static int nthSmallest(final int[] arr, final int n) {
        Arrays.sort(arr);
		return arr[n - 1];
    }
}