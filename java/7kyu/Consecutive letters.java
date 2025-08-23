// https://www.codewars.com/kata/5ce6728c939bf80029988b57

// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

// All inputs will be lowercase letters.

import java.util.Arrays;
class Solution{
    public static boolean solve(String s){
        char tempArray[] = s.toCharArray();    
        Arrays.sort(tempArray);       
        return "abcdefghijklmnopqrstuvwxyz".indexOf(new String(tempArray)) != -1;
    }
}