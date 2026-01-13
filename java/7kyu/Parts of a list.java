// https://www.codewars.com/kata/56f3a1e899b386da78000732

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

import java.util.Arrays;

public class Partlist {
    public static String[][] partlist(String[] arr) {
        String[][] returnArray = new String[arr.length-1][2];
        for(int i = 0; i < arr.length-1; ++i) {
          returnArray[i][0] = String.join(" ", Arrays.copyOfRange(arr, 0, i+1));
          returnArray[i][1] = String.join(" ", Arrays.copyOfRange(arr, i+1, arr.length));
        }
        
        return returnArray;
    }
}