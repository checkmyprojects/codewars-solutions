// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

public class Solution {
    public static String solve(final String str) {
        int lower = 0;
        for (Character c:str.toCharArray()) {
            if (Character.isLowerCase(c))
                lower++;
        }
        return str.length() - lower > lower ? str.toUpperCase() : str.toLowerCase();
    }
}