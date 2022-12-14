// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// https://www.codewars.com/kata/55ecd718f46fba02e5000029

import static java.util.stream.IntStream.rangeClosed;

interface Kata {
  static int[] between(int a, int b) {
    return rangeClosed(a, b).toArray();
  }
}