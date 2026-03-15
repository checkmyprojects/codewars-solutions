// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

public class GiftSorter{
  public String sortGiftCode(String code){
    char[] chars = code.toCharArray();
    java.util.Arrays.sort(chars);
    return new String(chars);
  }
}