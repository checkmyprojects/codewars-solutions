// https://www.codewars.com/kata/56b97b776ffcea598a0006f2

public class BubblesortOnce {
  public static int[] bubbleSortOnce(int[] array) {
    int[] result = array.clone();
    for (int i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        int temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
    }
    return result;
  }
}