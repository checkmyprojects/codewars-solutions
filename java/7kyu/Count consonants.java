// https://www.codewars.com/kata/564e7fc20f0b53eb02000106

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

public class Consonants {
  public static int getCount(String str) {
    if (str.equals("")){
      return 0;
    }
    int count = 0;
    String[] list = str.split("");
    String validStr = "qwrtypsdfghjklzxcvbnmQWRTTYPSDFGHJKLZXCVBNM";
    for (String i: list){
      if (validStr.contains(i)){
        count ++;
      }
    }
    return count;
  }
}