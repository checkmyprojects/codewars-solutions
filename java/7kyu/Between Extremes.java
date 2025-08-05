// https://www.codewars.com/kata/56d19b2ac05aed1a20000430

// Given an array of numbers, return the difference between the largest and smallest values.
// For example:
// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

public class Kata{
  public static int betweenExtremes(int[] numbers){
    int max = -9999999;
    int min = 9999999;
    for (int i: numbers){
      if (i > max){
        max = i;
      }
      if (i < min){
        min = i;
      }
    }
    return max - min;
  }
}