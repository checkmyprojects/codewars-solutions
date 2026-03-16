// https://www.codewars.com/kata/580a4734d6df748060000045

// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

import java.util.stream.IntStream;
class Solution {
    public static String isSortedAndHow(int[] array) {
        if(IntStream.range(0, array.length-1).allMatch(i -> array[i] <= array[i+1]))
            return "yes, ascending";
        if(IntStream.range(0, array.length-1).allMatch(i -> array[i] >= array[i+1]))
            return "yes, descending";
        return "no";
    }
}