// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

public class Kata{
  public static double find_average(int[] array){
    double sum = 0;
    for(int i=0; i<array.length; i++){
      sum+=array[i];
    }
    return sum/array.length;
  }
}