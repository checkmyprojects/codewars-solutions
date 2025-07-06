// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

import java.util.*;
public class Kata {
  public static boolean isAnagram(String test, String original) {
    return sort(test.toLowerCase()).equals(sort(original.toLowerCase()));
  }
  public static String sort(String s)
  {
    char[] chars = s.toCharArray();
    Arrays.sort(chars);
    return new String(chars);
  }
}