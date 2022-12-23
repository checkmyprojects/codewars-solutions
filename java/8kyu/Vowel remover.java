// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// https://www.codewars.com/kata/5547929140907378f9000039

public class Kata {
  public static String shortcut(String input) {
    return input.replaceAll("[aeiou]", "");
  }
}