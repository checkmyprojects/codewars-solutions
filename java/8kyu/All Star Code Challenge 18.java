// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// https://www.codewars.com/kata/5865918c6b569962950002a1

public class CodeWars {
  public static int strCount(String str, char letter) {
    int counter = 0;
    for(char character : str.toCharArray()) {
      if(letter == character) {
        counter++;
      }
    }
    return counter;
  }
}