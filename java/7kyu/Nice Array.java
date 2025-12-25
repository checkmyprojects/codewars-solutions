// https://www.codewars.com/kata/59b844528bcb7735560000a0

// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

import java.util.*;

public class Kata{
    public static boolean isNice(Integer[] arr){
      	       return Arrays.
                      stream(arr).
                      filter(i->(Arrays.asList(arr).contains(i+1) || Arrays.asList(arr).contains(i-1))).
                      count() == arr.length && arr.length > 1;

    }
}