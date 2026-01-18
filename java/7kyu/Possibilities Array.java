// https://www.codewars.com/kata/59b710ed70a3b7dd8f000027

// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Examples:

// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

public class Solution {

	public static boolean isAllPossibilities(int[] arg) {
    if(arg.length==0) return false;
		java.util.Arrays.sort(arg);
    return arg[0]==0 && arg[arg.length-1]==arg.length-1;
	}

}