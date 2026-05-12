// https://www.codewars.com/kata/55ee3ebff71e82a30000006a

// Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.

// All column titles will be uppercase.

// Examples:

// Column title: "A" --> return 1
// Column title: "Z" --> return 26
// Column title: "AA" --> return 27

public class TitleToNumber {
    public static long titleToNumber(String title) {
        long result = 0;
        for (char chr : title.toCharArray()) {
            result = (result * 26) + chr - 64;
        }
        return result;
    }
}