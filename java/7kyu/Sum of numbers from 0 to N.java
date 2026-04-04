// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

// We want to generate a function that computes the series starting from 0 and ending until the given number.

public class SequenceSum{

  public static String showSequence(int value){
    String ans = "";
    if (value < 0) return "" + value + "<0";
    if (value == 0) return "0=0";
    for (int i = 0; i <= value; i++) ans += "" + i + "+";
    return ans.substring(0,ans.length() - 1) + " = " + (value * (value + 1) /2);
  }
}