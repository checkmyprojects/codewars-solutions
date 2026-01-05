// https://www.codewars.com/kata/580755730b5a77650500010c

// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

public class OddEvenSort {
    public static String sortMyString(String s) {
        String even = "";
        String odd = "";
        char[] c = s.toCharArray();
        for (int i = 0; i < c.length; i++) {
            if (i % 2 == 0) {
                even += s.charAt(i);
            }
            else
            {
                odd += s.charAt(i);
            }
        }
        return even + " " + odd;
    }
}