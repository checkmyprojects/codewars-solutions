// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// https://www.codewars.com/kata/545afd0761aa4c3055001386

public class ZywOo {
  public static int[] take(int[] arr, int n) {
    return getFirstN(arr, n);
  }
  
  public static int[] getFirstN(int[] arr, int n) {
    if (arr.length < n) {
      return arr; 
    }
    
    int[] result = new int[n];
    for (int i = 0; i < n; i++) {
      result[i] = arr[i];
    }
    
    return result;
  }
}