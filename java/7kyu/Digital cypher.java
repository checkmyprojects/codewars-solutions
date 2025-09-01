// https://www.codewars.com/kata/592e830e043b99888600002d

// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

public class Solution{
  public static int[] encode(String s, int key){ 
       int n = s.length(); 
       int x [] = new int [n]; 
       char c [] = Integer.toString(key).toCharArray(); 
       for (int i = 0; i < n ; i++)
           x[i]=s.charAt(i)-'a' + c[i%c.length]-'0'+1; 
       return x;
    }
}