// https://www.codewars.com/kata/56ed20a2c4e5d69155000301

// You are given a string of n lines, each substring being n characters long.
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

public class Scale {
    
    public static String scale(String s, int hScale, int vScale) {
      return s == "" ? "" :
        Arrays.stream(s.split("\n"))
              .map(line -> vertical( horizontal(line, hScale), vScale ))
              .collect(Collectors.joining("\n"));
    }
    
    private static String horizontal(String line, int horizontalScale) {
      return Arrays.stream(line.split(""))
                   .map(ch -> repeatAndJoin(ch, horizontalScale, ""))
                   .collect(Collectors.joining(""));
    }
    
    private static String vertical(String line, int verticalScale) {
      return repeatAndJoin(line, verticalScale, "\n");
    }
    
    private static String repeatAndJoin(String s, int repeat, String join) {
      return String.join(join, Collections.nCopies(repeat, s));
    }
}