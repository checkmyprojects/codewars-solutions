// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

public class Kata {
    public static String removeConsecutiveDuplicates(String s){
        String newString[] = s.split(" ");
        String answer = newString[0];
        String currWord = newString[0];
        
        for (String word : newString) {
            if (!word.equals(currWord)) {
                answer = answer.concat(" " + word);
            }
            currWord = word;
        }
      return answer;
    }
}