// https://www.codewars.com/kata/541629460b198da04e000bb9

// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
// Examples

// last(Arrays.asList(1, 2, 3, 4)); // =>  4
// last("xyz");                     // => "z"
// last(1, 2, 3, 4);                // =>  4
// last(new int[]{1, 2, 3, 4});     // =>  4

import java.util.List;
import java.util.Arrays;

public class Solution {
    public static <T> T last(final List<T> list) {
        return list.stream()
            .reduce((a,b) -> b).orElse(null);
    }
    public static char last(final String string) {
        return string.chars().mapToObj(c -> (char) c)
            .reduce((a,b) -> b).orElse(null);
    }
    public static <T> T last(final T... list) {
        return Arrays.stream(list)
            .reduce((a,b) -> b).orElse(null);
    }
}