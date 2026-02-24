// https://www.codewars.com/kata/58880c6e79a0a3e459000004

// Task

// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

public class Kata {
  public static int houseNumbersSum(final int[] arr) {
    int houses = 0;
    
    for(int i = 0; i < arr.length && arr[i] != 0; i++) {
      houses += arr[i];
    }
    
    return houses;
  }
}