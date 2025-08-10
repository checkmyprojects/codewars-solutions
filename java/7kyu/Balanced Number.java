// https://www.codewars.com/kata/5a4e3782880385ba68000018

// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

public class Solution
{
    public static String balancedNum(long number)
    {
        var str = String.valueOf(number);
        int l = str.substring(0, str.length() / 2 - (str.length() % 2 == 0 ? 1 : 0)).chars().sum();
        int r = str.substring(str.length() / 2 + 1).chars().sum();
        return (l == r ? "" : "Not ") + "Balanced";
    }
}