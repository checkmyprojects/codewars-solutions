// https://www.codewars.com/kata/580878d5d27b84b64c000b51

// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

public class Kata {
    public static int sumTriangularNumbers(int n) {
        if (n <= 0) return 0;
        return n*(n+1)*(n+2)/6;
    }
}