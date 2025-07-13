// https://www.codewars.com/kata/5865cff66b5699883f0001aa

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

public class timeConverter{
  public static String toTime(int seconds){
    return seconds/3600+" hour(s) and "+seconds%3600/60+" minute(s)";
    }
}