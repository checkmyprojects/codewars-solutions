// https://www.codewars.com/kata/5572f7c346eb58ae9c000047

// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

public class Pattern1{
  public static String pattern(int n){
    String output = "";
    for(int i = 1; i <= n; i++) {
      for(int j = 1; j <= i; j++) output += String.valueOf(i);
      if(n > 1 && i < n) output += "\n";
    }
    return output;
  }
}