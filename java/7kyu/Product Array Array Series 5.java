// https://www.codewars.com/kata/5a905c2157c562994900009d

// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]. 

public class Solution {

    public static long[] productArray(int[] n) {  
      int len = n.length;
      long prod = 1, ary[] = new long[len];
      for (int a : n) prod *= a;      
      for (int i = 0; i < len; i++) ary[i] = prod / n[i];
      return ary;
    }
}