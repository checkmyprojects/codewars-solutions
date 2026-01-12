// https://www.codewars.com/kata/54b81566cd7f51408300022d

// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

import java.util.ArrayList;
import java.util.List;

class WordSearch {
  static String[] findWord(String x, String[] y){
            List<String> result = new ArrayList<String>();

            for (String s : y){
                if (s.toLowerCase().contains(x.toLowerCase())) {
                    result.add(s);
                }                
            }
           
            if (result.isEmpty()){
                return new String[]{"Empty"};
            } else {
                return result.toArray(new String[0]);
            } 
  }
}