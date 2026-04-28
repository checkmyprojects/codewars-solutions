// https://www.codewars.com/kata/5c3433a4d828182e420f4197

// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
// Example:

// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

public class ArrayReverser {

   public static String[] reverse(String[] a) {
     String s = new StringBuilder(String.join("",a)).reverse().toString();
     String[] b = new String[a.length];
     int i = 0, x = 0;
     for (String ss: a) b[x++] = s.substring(i,i+=ss.length());
     return b;
   }
}