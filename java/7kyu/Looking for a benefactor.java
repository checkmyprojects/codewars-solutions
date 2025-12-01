// https://www.codewars.com/kata/569b5cec755dd3534d00000f

// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

import java.util.Arrays;

public class NewAverage {
    public static long newAvg(double[] a, double navg) {
        double sum = Arrays.stream(a).sum();
        double result = navg * (a.length + 1) - sum;
        if (result > 0) {
            return Math.round(Math.ceil(result));
        } else {
            throw new IllegalArgumentException();
        }
    }
}