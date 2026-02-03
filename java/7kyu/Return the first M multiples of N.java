// https://www.codewars.com/kata/593c9175933500f33400003e

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

public class Kata {
  public static int[] multiples(int m, int n) {
    int[] arr = new int[m];
    for(int i = 0; i < arr.length; i++){
      arr[i] = (i + 1) * n;
    }
    return arr;
  }
}