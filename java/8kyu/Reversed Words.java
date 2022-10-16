// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

import static java.util.Arrays.stream;
public class ReverseWords{
 public static String reverseWords(String str){
     return stream(str.split(" ")).reduce((x, y) -> y + " " + x).orElse("");
 }
}