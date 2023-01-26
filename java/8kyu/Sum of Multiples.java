// Find the sum of all multiples of n below m

// https://www.codewars.com/kata/57241e0f440cd279b5000829

public class Kata {
    public static long sumMul(int n, int m) {
        if (n < 1 || m < 1) throw new IllegalArgumentException("n or m < 1");
        int x = (m - 1) / n;
        return (long) (n * 0.5 * x * (x + 1));
    }
}