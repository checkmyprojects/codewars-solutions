// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// https://www.codewars.com/kata/57faf7275c991027af000679

interface Kata {
  static String remove(String s, int n) {
    while (n-- > 0) s = s.replaceFirst("!", "");
    return s;
  }
}