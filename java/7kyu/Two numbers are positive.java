// https://www.codewars.com/kata/602db3215c22df000e8544f0

// Task:

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

public class Kata {
  public static boolean twoArePositive(int a, int b, int c) {
    int count = 0;

    count += a>0?1:-1;
    count += b>0?1:-1;
    count += c>0?1:-1;

    return count==1?true:false;
  }
}