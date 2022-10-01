// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

public class Maps {
  public static int[] map(int[] arr) {
    for(int i=0; i<arr.length; i++){
      arr[i]*=2;
    }
    return arr;
  }
}