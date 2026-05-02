// https://www.codewars.com/kata/6411b91a5e71b915d237332d

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

public class Kata {
  public static boolean validParentheses(String parenStr) {
    int counter = 0;
    for (char c: parenStr.toCharArray()) {
      if (c == '(') {
        counter++;
      } else {
        counter--;
        if (counter < 0) {
          return false;
        }
      }
    }
    return counter == 0;
  }
}