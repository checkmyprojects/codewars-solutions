// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046

// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018
// Task

// Given a year, Find The next happy year or The closest year You'll see your best friend

import java.util.HashSet;
import java.util.Set;

public class HappyYear {
    static public int nextHappyYear(int year) {
       Set<Character> uniqueDigits = new HashSet<>();
        do {
            char[] digits = Integer.toString(++year).toCharArray();
            for (int i = 0; i < digits.length; i++) {
                uniqueDigits.add(digits[i]);
                if (uniqueDigits.size() < i + 1) {
                    uniqueDigits.clear();
                    break;
                }
            }
        } while (uniqueDigits.size() < 4);
        return year;
    }
}