// The highest profit wins!

// https://www.codewars.com/kata/559590633066759614000063

// Write a function that returns both the minimum and maximum number of the given list/array. 

import java.util.Arrays;
class MinMax {
    public static int[] minMax(int[] arr) {
        int[] result = new int[2];
        Arrays.sort(arr);
        result[0] = arr[0];
        result[1] = arr[arr.length - 1];
        return result;        
    
    }
}