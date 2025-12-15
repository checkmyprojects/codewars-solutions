// https://www.codewars.com/kata/58daa7617332e59593000006

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

public class MostDigits {
  public static int findLongest(int[] numbers) {
    int index = 0;
    for (int i = 0; i < numbers.length; i++) {
      if (String.valueOf(Math.abs(numbers[i])).length() > String.valueOf(Math.abs(numbers[index])).length()) {
        index = i;
      }
    }
    return numbers[index];
  }
}