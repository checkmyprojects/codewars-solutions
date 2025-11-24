// https://www.codewars.com/kata/62a611067274990047f431a8

// Given an integer n and two other values, build an array of size n filled with these two values alternating.

public class Kata {
  public static String[] alternate(int n, String firstValue, String secondValue) {
    String[] str = new String[n];
    for(int i = 0; i < n; i++){
      str[i] = (i % 2 == 0 ? firstValue : secondValue);
    }
    return str;
  }
}