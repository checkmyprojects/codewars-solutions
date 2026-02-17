// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
// Example

// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

public class Kata {
    public static String[] scrollingText(String text) {
        String[] result = new String[text.length()];
        StringBuilder stringBuilder = new StringBuilder(text.toUpperCase());
        for (int i = 0; i < result.length; i++) {
            result[i] = stringBuilder.toString();
            stringBuilder.append(stringBuilder.charAt(0)).deleteCharAt(0);
        }
        return result;
    }
}