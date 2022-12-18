// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// https://www.codewars.com/kata/57d814e4950d8489720008db

public class Kata {
  public static int nthPower(int[] array, int n) {
    if(array.length > n){
      return (int)Math.pow(array[n], n);
    }
    return -1;
  }
}