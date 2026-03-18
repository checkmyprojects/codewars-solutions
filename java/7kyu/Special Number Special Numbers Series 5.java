// https://www.codewars.com/kata/5a55f04be6be383a50000187

// Definition

// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes

//     The number passed will be positive (N > 0) .

//     All single-digit numbers within the interval [1:5] are considered as special number. 
public class Solution {
    public static String specialNumber(int number) {
        String result = "Special!!";
        while (number > 0) {
            int digit = number % 10;
            if (digit > 5 || digit < 0) {
                return "NOT!!";
            }
            number /= 10;
        }
        return result;
    }
}