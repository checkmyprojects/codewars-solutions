// https://www.codewars.com/kata/55805ab490c73741b7000064

import java.util.Map;
import java.util.stream.Collectors;

public class Backronym {
  private static Map<String, String> dictionary = Preload.dictionary;
  public static String makeBackronym(String acronym) {
    return acronym.toUpperCase().chars().mapToObj(i -> dictionary.get("" + (char)i)).collect(Collectors.joining(" "));
  }
}