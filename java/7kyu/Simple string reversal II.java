// https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac

// In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"

// Input will be lowercase and uppercase letters only.

// The first index a will always be smaller than the string length; the second index b can be greater than the string length

class Solution{
    public static String solve(String s, int a, int b){
        if(b+1>s.length()) b=s.length()-1;
    return s.substring(0,a)+ new StringBuilder(s.substring(a,b+1))
      .reverse().toString()+s.substring(b+1);
    }
}