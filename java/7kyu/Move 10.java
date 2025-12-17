// https://www.codewars.com/kata/57cf50a7eca2603de0000090

// Move every letter in the provided string forward 10 letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.

import java.util.stream.Collectors;
import static java.util.stream.Collectors.joining;

public class MoveTen {
  public static String moveTen(String s) {
    return s.chars().map(item->{
      if (item > 'p'){
        return item-'p'-1+'a';
      }
      return item+10;
    }).mapToObj(i -> Character.toString(i)).collect(Collectors.joining(""));
  }
}