// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// https://www.codewars.com/kata/563b74ddd19a3ad462000054

public class Kata {
  public static String stringy(int size) {
    StringBuilder builder = new StringBuilder();
    for (int i = 0; i < size; i++){
    if (i % 2 ==0) { 
      builder.append(1); 
    } else {
      builder.append(0); 
    }
    }
    return builder.toString();
  }
}