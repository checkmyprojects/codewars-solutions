// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

public class MaxProduct {
    public int adjacentElementsProduct(int[] array) {
        int ans = Integer.MIN_VALUE;
        for (int i = 0; i < array.length-1; i++)
            ans = Math.max(ans,array[i]*array[i+1]);
        return ans;
    }
}