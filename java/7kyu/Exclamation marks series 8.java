// https://www.codewars.com/kata/57fafd0ed80daac48800019f

// Move all exclamation marks to the end of the sentence

public class Kata {
  
  public static String remove(String source) {
    String[] arr = source.split("!", -1);
    
    return String.join("", arr) + "!".repeat(arr.length - 1);
  }
}