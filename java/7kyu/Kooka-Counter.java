// https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258

public class Dinglemouse {
  public static int kookaCounter(final String laughing) {
    return laughing.replaceAll("(ha)+", "1").replaceAll("(Ha)+", "1").length();
  }
}