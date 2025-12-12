// Minimize Sum Of Array (Array Series #1)

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

public class Solution
{
    public static int minSum(int[] numbers)
    {
        java.util.Arrays.sort(numbers);
        int min = 0;
        
        for (int i = 0; i < numbers.length / 2; i++)
            min += numbers[i] * numbers[numbers.length - 1 - i];
        
        return min;
    }
}