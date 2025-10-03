// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc

// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]

public class FizzBuzz{
    public static int[] solution(int number) {
      int n = number - 1;
      int a = n / 3;
      int b = n / 5;
      int c = n / 15;
      return new int[]{a - c, b - c, c};
    }
}