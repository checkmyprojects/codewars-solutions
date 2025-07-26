// https://www.codewars.com/kata/5a58d889880385c2f40000aa

// Given a number determine if it Automorphic or not .

public class Solution {
    public static String autoMorphic(int n) {
      return (n*n+"").endsWith(""+n)?"Automorphic":"Not!!";
    }
}