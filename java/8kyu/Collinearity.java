// https://www.codewars.com/kata/65ba420888906c1f86e1e680

// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

public class Kata {
  
  public static boolean collinearity(int x1, int y1, int x2, int y2) {
    return x1 * y2 == y1 * x2;
  }
}