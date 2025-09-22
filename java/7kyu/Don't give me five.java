// Don't give me five!

// https://www.codewars.com/kata/5813d19765d81c592200001a

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

public class Kata
{
  public static int dontGiveMeFive(int start, int end)
  {
    int result = 0;
    for (int i = start; i <= end; i++) {
      if (String.valueOf(i).indexOf('5') == -1)
        result++;
    }
    return result;
  }
}