// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

public class Kata {

  public static int maxDiff(int[] lst) {
  
    if(lst.length == 0) return 0;

    int min = lst[0], 
        max = lst[0];

    for(int i = 1; i < lst.length; i++)
      if(lst[i] < min) min = lst[i];
      else if(lst[i] > max) max = lst[i];

    return max - min;
  }
}