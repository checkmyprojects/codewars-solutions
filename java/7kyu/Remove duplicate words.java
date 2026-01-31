// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

import static java.util.stream.Collectors.joining;

import java.util.Arrays;

public class Solution{
    public static String removeDuplicateWords(String s){
        return Arrays.stream(s.split(" "))
                     .distinct()
                     .collect(joining(" "));
    }
}