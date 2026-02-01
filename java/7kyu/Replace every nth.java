// https://www.codewars.com/kata/57fcaed83206fb15fd00027a

// Write a method, that replaces every nth char oldValue with char newValue.

public class Kata {
  public static String replaceNth(String text, int n, char oldValue, char newValue) {
    int copy = n;
    char[] c = text.toCharArray();
    for (int i = 0; i < c.length; i++) {
      if (copy == 1 && c[i] == oldValue) {
        c[i] = newValue;
        copy = n;
      }
      else if(c[i] == oldValue) copy--;
    }
    return new String(c);
  }
}