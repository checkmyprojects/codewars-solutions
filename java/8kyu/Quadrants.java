// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

public class Kata {
  
  public static int quadrant(int x, int y) {
    return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
  }
}