// https://www.codewars.com/kata/5a651865fd56cb55760000e0

// Definition

// An element is leader if it is greater than The Sum all the elements to its right side.
// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.
// Notes

//     Array/list size is at least 3 .
//     Array/list's numbers Will be mixture of positives , negatives and zeros
//     Repetition of numbers in the array/list could occur.
//     Returned Array/list should store the leading numbers in the same order in the original array/list .

import java.util.*;

public class Solution {

    public static List arrayLeaders(int[] n) {
      List<Integer> ary = new ArrayList<>();
      for (int i = n.length-1, sum = 0; i >= 0; i--) {
        if (n[i] > sum) ary.add(0, n[i]);
        sum += n[i];
      }
      return ary;
    }
    
}