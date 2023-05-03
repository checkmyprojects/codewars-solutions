// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

public class Kata {
  
  public static Object[] removeEveryOther(Object[] arr) {
    Object[] output = new Object[(arr.length + 1) / 2];
    
    for (int i = 0; i < output.length; i++) {
        output[i] = arr[i * 2];
    }
    
    return output;
  }
}