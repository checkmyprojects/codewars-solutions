// https://www.codewars.com/kata/538835ae443aae6e03000547

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

import java.util.function.IntUnaryOperator;

public class Kata {

  public static IntUnaryOperator add(int n) {
    return num -> num + n;
  }

}