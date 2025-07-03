// https://www.codewars.com/kata/537baa6f8f4b300b5900106c

// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw IllegalArgumentException.

public class Circle {
  public static double area(double radius) {
    if (radius <= 0.0 || radius == Double.NaN) {
      throw new IllegalArgumentException();
    }
    return Math.round(Math.PI*(radius*radius) * 100.0) / 100.0;
  }
}