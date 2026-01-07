// https://www.codewars.com/kata/57a6633153ba33189e000074

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

import java.util.List;
import java.util.ArrayList;
import org.apache.commons.lang3.tuple.Pair;

public class Solution {
    public static List<Pair<Character, Integer>> orderedCount(String text) {
        List<Pair<Character, Integer>> result = new ArrayList<>();
      
        int length = text.length();
        while(text.length() > 0) {
            Character key = text.charAt(0);
            text = text.replaceAll(String.valueOf(key), "");
            result.add(Pair.of(key, length - text.length()));
            length = text.length();
        }
      
      return result;
    }
}

