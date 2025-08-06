// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

public class Sum
{
  public int GetSum(int a, int b)
  {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
  }
}