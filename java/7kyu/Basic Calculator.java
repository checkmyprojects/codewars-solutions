// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f

// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

public class Calculator {
  public static Double calculate(final double x, final String op, final double y) {
    switch (op) {
      case "+": return x + y;
      case "-": return x - y;
      case "*": return x * y + 0.0;
      case "/": return y == 0 ? null : x / y;
    }
    return null;
  }
}