// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

import java.util.Arrays;
import java.util.Collections;

public class Kata {
  public static int[] flip(char dir, int[] arr) {
        
    if (dir == 'L') {
          arr = Arrays.stream(arr)
                  .boxed()
                  .sorted(Collections.reverseOrder())
                  .mapToInt(Integer::intValue)
                  .toArray();
    } else{
      Arrays.sort(arr);
    }
    
    return arr;
  }
}