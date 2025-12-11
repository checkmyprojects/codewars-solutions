// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

import java.util.Arrays;
public class Solution
{
    public static int maxTriSum (int[] numbers)
    {  
      Arrays.sort(numbers);  
      int count = 0, sum = 0;
      
      for(int i = numbers.length-1; i > 0; i--){
        if(numbers[i] != numbers[i-1]){
          sum+=numbers[i];
          count++;
        }
        if(count == 3){
          break;
        }
      }
      return sum;
    }
}