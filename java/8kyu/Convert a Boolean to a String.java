// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// https://www.codewars.com/kata/551b4501ac0447318f0009cd

public class BooleanToString {
  public static String convert(boolean b){
    if(b) {
      return "true";
    } else {
      return "false";
    }
  }
}