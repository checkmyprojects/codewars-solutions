// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// https://www.codewars.com/kata/57eae65a4321032ce000002d

public class FakeBinary {
    public static String fakeBin(String numberString) {
        return numberString.replaceAll("[1-4]", "0").replaceAll("[^0]", "1");
    }
}