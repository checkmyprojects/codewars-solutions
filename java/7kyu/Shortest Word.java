// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

import java.util.Arrays;

public class Kata {
    public static int findShort(String s) {
        int min = Integer.MAX_VALUE;
        for(String each : s.split(" "))
        {
        if(each.length() < min)
        min = each.length();
        }
         return min;
    }
}