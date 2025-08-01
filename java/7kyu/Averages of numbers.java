// https://www.codewars.com/kata/57d2807295497e652b000139

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
// If the array has 0 or 1 values or is null, your method should return an empty array.

public class Kata{
  public static double[] averages(int[] numbers){
    if (numbers == null){
      return new double[0];
    }
    else if(numbers.length == 0 || numbers.length == 1){
      return new double[0];
    }
    var result = new double[numbers.length-1];
    for (var x = 0; x < result.length; x++){
      result[x] = (numbers[x] + numbers[x+1]);
      result[x] = result[x] / 2;
    }
    return result;
  }
}