// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

public class Kata {
  public static int[] invert(int[] array) {
  for(int i=0; i<array.length; i++){
    array[i] = array[i]*-1;
  }
  return array;
  }
}