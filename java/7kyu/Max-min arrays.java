// https://www.codewars.com/kata/5a090c4e697598d0b9000004

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:
// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

import java.util.Arrays;
class Solution{
    public static int[] solve (int[] arr){  
        Arrays.sort(arr);
        int[] solutionArray = new int[arr.length];
        
        for(int i = 0; i < arr.length; i++){
          solutionArray[i] = i % 2 == 0 ? arr[arr.length - i/2 - 1] : arr[i/2];
        }
        return solutionArray;
    }
}