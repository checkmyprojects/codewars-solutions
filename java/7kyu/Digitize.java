// https://www.codewars.com/kata/5417423f9e2e6c2f040002ae

// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:
// 123 => [1,2,3]
// 1 => [1]
// 8675309 => [8,6,7,5,3,0,9]

public class Solution{
  public static int[] digitize(int n){
        int[] arr = new int[Integer.toString(n).length()];
        int copy = n;
        int index = arr.length - 1;
        while(copy != 0) {
            int cur = copy % 10;
            arr[index] = cur;
            index--;
            copy /= 10;
        }
        return arr;
    }
}