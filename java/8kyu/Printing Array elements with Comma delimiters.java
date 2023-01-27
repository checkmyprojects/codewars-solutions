// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// https://www.codewars.com/kata/56e2f59fb2ed128081001328

import java.util.Arrays;
import java.util.stream.Collectors;

public class ArrayPrinter {

    public static String printArray(Object[] array) {
      return Arrays.stream(array).map(Object::toString).collect(Collectors.joining(","));
    }
}