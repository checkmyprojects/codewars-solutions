// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

package com.codewars.hwtdstrngls;

public class RoundToTheNextMultipleOf5 {

  public static int roundToNext5(int number) {
    while(number % 5 != 0) number++;
    return number;
  }
}
