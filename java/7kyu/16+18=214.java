// https://www.codewars.com/kata/5effa412233ac3002a9e471d

// For this kata you will have to forget how to add two numbers.

public class SillyAdditon {

  public static int add(int x, int y) {
    int res = 0, m = 1;
    while (x != 0 || y != 0) {
      int s = x % 10 + y % 10;
      res += s * m;
      m *= s < 10 ? 10 : 100;
      x /= 10;
      y /= 10;
    }
    return res;
  }
}