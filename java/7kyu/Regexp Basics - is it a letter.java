// https://www.codewars.com/kata/567de72e8b3621b3c300000b

// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

public class StringUtils {
  
  public static boolean isLetter(String s) {
    return s.matches("[a-zA-Z]");
  }
}