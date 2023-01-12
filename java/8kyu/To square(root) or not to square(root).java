// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

public class Kata
{
  public static int[] squareOrSquareRoot(int[] array)
  {
    for(int i = 0; i < array.length; i++) {
      if (Math.sqrt(array[i]) % 1 == 0) array[i] = (int) Math.sqrt(array[i]);
      else array[i] = array[i] * array[i];
    }
    return array;
  }