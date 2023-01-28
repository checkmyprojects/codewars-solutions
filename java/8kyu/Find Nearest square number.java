// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

public class CodeWarsMath {
  public static int nearestSq(final int n){
    return (int) Math.pow(Math.round(Math.sqrt(n)), 2);
  }
}