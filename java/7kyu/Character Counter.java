// https://www.codewars.com/kata/56786a687e9a88d1cf00005d

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
public class CharacterCounter {
  public static boolean validateWord(String word) {
    Map<Character, Integer> map = new HashMap<Character, Integer>();
    String lower = word.toLowerCase();
    for (char c : lower.toCharArray()) {
    	map.put(c,  map.get(c) == null ? 1 : map.get(c) + 1);
    }
    HashSet<Integer> counts = new HashSet<Integer>(map.values());
    return counts.size() == 1;
  }

}