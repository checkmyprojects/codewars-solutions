// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// https://www.codewars.com/kata/56b29582461215098d00000f

import static java.util.stream.IntStream.rangeClosed;
public class Kata {
  public static int[] pipeFix(int[] numbers) {
    return rangeClosed(numbers[0], numbers[numbers.length - 1]).toArray();
  }
}