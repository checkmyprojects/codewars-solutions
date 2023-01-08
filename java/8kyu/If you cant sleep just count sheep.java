// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

class Kata {
  public static String countingSheep(int num) {
    String result = "";
    for(int i = 1; i <= num; i++){
      result += i + " sheep...";
    }
    return result;
  }
}