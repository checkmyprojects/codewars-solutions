// https://www.codewars.com/kata/55a75e2d0803fea18f00009d

public class Slope
{

  public String slope(int[] points)
    {
        int deltaY = points[3] - points[1];
        int deltaX = points[2] - points[0];
        if (deltaX == 0) {
          return "undefined";
        }
        return String.valueOf(deltaY / deltaX);
		}

}