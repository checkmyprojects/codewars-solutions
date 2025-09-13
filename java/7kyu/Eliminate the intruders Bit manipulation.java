// https://www.codewars.com/kata/5a0d38c9697598b67a000041

// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

public class SetBits {
  public static long eliminateUnsetBits(String number) {
    number = number.replace("0", "");
        return number.isEmpty() ? 0 : Long.parseLong(number, 2);
  }
}