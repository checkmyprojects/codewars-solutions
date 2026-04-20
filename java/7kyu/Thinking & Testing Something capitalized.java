// https://www.codewars.com/kata/56d93f249c844788bc000002

import java.util.stream.Collectors;
import java.util.Arrays;

public class ThinkingAndTesting {
  public static String testSomethingCapitalized(String s) {
    return Arrays.stream(s.split(" "))
                .map(x -> x.length() > 0 ? x.substring(0, x.length()-1) + x.substring(x.length()-1).toUpperCase() : x)
                .collect(Collectors.joining(" "));
  }
}