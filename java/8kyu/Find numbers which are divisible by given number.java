// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// https://www.codewars.com/kata/55edaba99da3a9c84000003b

import static java.util.stream.IntStream.of;
public class EvenNumbers {
  public static int[] divisibleBy(int[] numbers, int divider) {
    int count = 0;
        for (int number : numbers){
          if (number % divider == 0){
            count ++;
          }
        }
        int[] arr = new int[count];
        int i = 0;        
        for (int number : numbers){
          if (number % divider == 0){
            arr[i] = number;
            i++;
          }        
        }
        return arr;
  }
}