// https://www.codewars.com/kata/55e6f5e58f7817808e00002e

// Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.

import java.util.Arrays;
class DivSeven {
    public static long[] seven(long m) {
        int n=0;
        while (m>99) {
            m = (m/10)-(m%10)*2;
            n++;
        }
        return new long[] {m, n};
    }
}