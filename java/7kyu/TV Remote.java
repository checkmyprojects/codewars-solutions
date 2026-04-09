// https://www.codewars.com/kata/5a5032f4fd56cb958e00007a

// How many button presses on my remote are required to type a given word?

public class Dinglemouse {

public class Dinglemouse {

  private static final String KB = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
  
  public static int tvRemote(final String word) {  
    int n = 0, prevx = 0, prevy = 0;
    for (final char c : word.toCharArray()) {
      final int idx = KB.indexOf(c);
      final int y = idx / 8, x = idx % 8;
      n += Math.abs(x - prevx) + Math.abs(y - prevy) + 1;
      prevx = x; prevy = y;
    }    
    return n;
  }
  
}