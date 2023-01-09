// Get rid of them. Only the ending ones.

// https://www.codewars.com/kata/570a6a46455d08ff8d001002

public class NoBoring {
    public static int noBoringZeros(int n) {
        if (n == 0)
            return n;
            
        while (n % 10 == 0)
            n /= 10;       
        
        return n;
    }
}