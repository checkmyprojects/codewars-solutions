// https://www.codewars.com/kata/5803753aab6c2099e600000e

// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthdate is given in the following order: year, month, day. You can assume it is in the past.

// For example if today is 30 November 2015 then

// 2015, 11, 1 => "You are 29 days old"

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Kata {
  public static String ageInDays(int year, int month, int day) {
    LocalDate birth = LocalDate.of(year, month, day);
    long days = ChronoUnit.DAYS.between(birth, LocalDate.now());
    return "You are " + days + " days old";
  }
}