// https://www.codewars.com/kata/57faf32df815ebd49e000117

// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

public class R {
  public static String removeBang(String str) {
    return str.replaceAll("\\b!+", "");
  }
}