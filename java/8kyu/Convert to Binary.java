// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// https://www.codewars.com/kata/59fca81a5712f9fa4700159a

public class Kata {

  public static int toBinary(int n) {
    return Integer.parseInt(Integer.toBinaryString(n));
  }

}