// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Array size is at least 1.
// All numbers will be positive.

public class Solution
{
    public static int[] rowWeights (final int[] weights){
		int a = 0;
		int b = 0;
		for (int i = 0; i < weights.length; i++) {
			if (i % 2 == 0) {
				a += weights[i];
			} else {
				b += weights[i];
			}
		}
		return new int[] { a, b };
    }
}