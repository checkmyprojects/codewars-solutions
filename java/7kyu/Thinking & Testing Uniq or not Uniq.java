// https://www.codewars.com/kata/56d949281b5fdc7666000004

import java.util.stream.IntStream;
import java.util.Arrays;

public class Kata {
  public static int[] testit(int[] a, int[] b){
    IntStream aStr = Arrays.stream(a).distinct();
    IntStream bStr = Arrays.stream(b).distinct();
    return IntStream.concat(aStr, bStr).sorted().toArray();
  }
}