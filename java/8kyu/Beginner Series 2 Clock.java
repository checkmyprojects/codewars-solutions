// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

public class Clock{
  public static int Past(int h, int m, int s){
    return (h * 3600 + m * 60 + s) * 1000;
  }
}