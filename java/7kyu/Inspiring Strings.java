// https://www.codewars.com/kata/5939ab6eed348a945f0007b2

// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

public class Kata {
  public static String longestWord(String wordString) {
    String result = "";
    String[] list = wordString.split(" ");
    for (String i: list){
      if (i.length() >= result.length()){
        result = i;
      }
    }
    return result;
  }
}