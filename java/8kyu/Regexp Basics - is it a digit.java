// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// https://www.codewars.com/kata/567bf4f7ee34510f69000032

public class StringUtils {
  public static boolean isDigit(String s) {
    return s.matches("\\d");
  }
}