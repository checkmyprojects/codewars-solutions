// https://www.codewars.com/kata/55b051fac50a3292a9000025

// Your task is to return a number from a string.
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

public class Kata {
    public static long filterString(final String value) {
        return Long.valueOf(value.replaceAll("\\D", ""));
    }
}