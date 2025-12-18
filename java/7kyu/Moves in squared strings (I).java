// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.function.UnaryOperator;
import java.util.stream.Collectors;

class Opstrings {
    
    public static String vertMirror (String strng) {
        String[] arr = strng.split("\n");
        List<String> newarr = Arrays.stream(arr)
                .map(x -> new StringBuilder(x).reverse().toString())
                .collect(Collectors.toList());
        return String.join("\n", newarr);
    }
    public static String horMirror (String strng) {
        String[] arr = strng.split("\n");
        Collections.reverse(Arrays.asList(arr));
        return String.join("\n", arr);
    }
    public static String oper(UnaryOperator<String> operator, String s) {
        return operator.apply(s);
    }
}