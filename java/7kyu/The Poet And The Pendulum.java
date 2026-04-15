// https://www.codewars.com/kata/5bd776533a7e2720c40000e5

// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

//     The Smallest element of the list of integers , must come in center position of array/list.
//         The Higher than smallest , goes to the right .

//     The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

public class Poet {

  public static int[] pendulum(final int[] arr) {
    java.util.Arrays.sort(arr);
    int ret[] = new int[arr.length], i = (arr.length-1)/2, j = i+1, n = 0;
    for (int x : arr) ret[n++%2==0 ? i-- : j++] = x;
    return ret;
  }

}