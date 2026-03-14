// https://www.codewars.com/kata/51f41b98e8f176e70d0002a8

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

import static java.util.Arrays.sort;

public class SortArray{
  public static int[] sortArray(int[] ary) { sort(ary); return ary; }
  public static long[] sortArray(long[] ary) { sort(ary); return ary; }
  public static float[] sortArray(float[] ary) { sort(ary); return ary; }
  public static double[] sortArray(double[] ary) { sort(ary); return ary; }
  public static Object[] sortArray(Object[] ary) { sort(ary); return ary; }
}