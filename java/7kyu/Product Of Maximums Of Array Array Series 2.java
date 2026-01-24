// https://www.codewars.com/kata/5a63948acadebff56f000018

// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes

//     Array/list size is at least 3 .
//     Array/list's numbers Will be mixture of positives , negatives and zeros
//     Repetition of numbers in the array/list could occur.

import java.util.Arrays;
public class Solution
{
    public static long maxProduct(int[] numbers, int sub_size)
    {
        Arrays.sort(numbers);
        long result = 1;
        for (int i = numbers.length-1;sub_size > 0;sub_size--,i--){
            result*=numbers[i];
        }
        return result;
    }
}