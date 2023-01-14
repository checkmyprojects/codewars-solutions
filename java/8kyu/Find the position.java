// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// https://www.codewars.com/kata/5808e2006b65bff35500008f

public class Kata {
  public static String position(char alphabet) {
    return "Position of alphabet: " + (alphabet - 96);
  }
}