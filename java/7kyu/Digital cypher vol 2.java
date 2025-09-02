// https://www.codewars.com/kata/592edfda5be407b9640000b2

// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.
// Input / Output

// The code is a array of positive integers.
// The key input is a nonnegative integer.

public class Solution {
  public static String decode(int[] code, int key) {
    String tmp = Integer.toString(key);
    int v = 0;
    String str="abcdefghijklmnopqrstuvwxyz";
    String s1="";
    
    for(int i=0; i<code.length;i++){
      int val = code[i] - Character.getNumericValue(tmp.charAt(v));
      s1= s1+str.charAt(val-1);
      v++;
      if(v>tmp.length()-1){
        v=0;
      }
    }
    return s1;
  }
}