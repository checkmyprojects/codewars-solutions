// https://www.codewars.com/kata/58aed2cafab8faca1d000e20

// You are provided with an array of positive integers and an additional integer n (n > 1).
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
// Examples:
// [1, 2, 3] >> 6
// (1^6 - 1) + (2^6 - 2) + (3^6 - 3) = 6
// [1, 3, 4] >> 11
// (1^6 - 1) + (3^6 - 3) + (4^6 - 4) = 11

public class Kata {
  public static int modifiedSum(int[] array, int power) {
   int sum = 0 ; 
     for (int x : array) 
       sum = sum + (int)Math.pow(x,power) - x ; 
    return sum ;
    }
}