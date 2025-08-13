// https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e

// In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

// A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

// As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

// Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Crypto {
  
  public static String wordPattern(final String word){
     Map<Character, String> map = new HashMap<>();
        List<String> result = new ArrayList<>();
        for (char c : word.toLowerCase().toCharArray()) {
            String val = map.get(c);
            if (val == null) {
                val = String.valueOf(map.size() );
                map.put(c, val);
            }
            result.add(val);
        }
        return result.stream().collect(Collectors.joining("."));
  }
}