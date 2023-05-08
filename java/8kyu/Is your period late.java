// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1

import java.time.LocalDate;

public class PeriodTime {
    public static boolean periodIsLate(LocalDate last,LocalDate today,int cycleLength) {
        return today.minusDays(cycleLength).isAfter(last);
    }
}