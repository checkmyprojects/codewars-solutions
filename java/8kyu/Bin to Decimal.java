// Complete the function which converts a binary number (given as a string) to a decimal number.

// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

public class Converter{
  public static int binToDecimal(String inp){
    return Integer.parseInt(inp, 2);
  }
}