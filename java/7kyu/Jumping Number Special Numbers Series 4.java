// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed

// Definition

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not . 

public class Solution
{
    public static String jumpingNumber(int number) {
        while (number > 10) {
            int previous = number % 10;
            number = number / 10;
            if (previous - number % 10 != 1 && previous - number % 10 != -1) {
                return "Not!!";
            }
        }
        return "Jumping!!";
    }
  }