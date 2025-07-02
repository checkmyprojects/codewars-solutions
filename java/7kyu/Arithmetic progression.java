// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018

// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

class Progression {
  public static String arithmeticSequenceElements(int first, int step, long total) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < total; i++) {
      sb.append(first + step * i).append(", ");
    }
    return sb.delete(sb.length() - 2, sb.length()).toString();
  }
}