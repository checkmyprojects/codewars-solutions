// https://www.codewars.com/kata/58c9322bedb4235468000019

// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

public class Kata {
    public static boolean isVeryEvenNumber(int n) {
        while (n > 9) {
            int a = 0;
            for (char c : String.valueOf(n).toCharArray()) {
                a += Character.getNumericValue(c);
            }
            n = a;
        }
        return n % 2 == 0;
    }
}