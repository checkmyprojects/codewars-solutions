// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// Given a string str, reverse it and omit all non-alphabetic characters.

public class Kata {
    public static String reverseLetter(final String s) {
        return new StringBuilder(s.replaceAll("[^a-zA-Z]", "")).reverse().toString();
    }
}