// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).

// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

public class ZywOo {
  public static boolean validateUsr(String s) {
    return s.matches("[a-z0-9_]{4,16}");
  }
}