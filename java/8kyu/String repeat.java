// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

public class Solution {
    public static String repeatStr(final int repeat, final String string) {
      String merged = "";  
      for(int i = 1; i<=repeat; i++){
          merged = merged + string;
        }
      return merged;
    }
}