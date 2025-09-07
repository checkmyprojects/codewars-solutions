// https://www.codewars.com/kata/538948d4daea7dc4d200023f

// Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

// The upper limit for A and B is 216, int.MaxValue or similar.

// For example, you can change 31 to 14 by flipping the 4th and 0th bit:

public class DeltaBits {
    public static int convertBits(int a, int b) {
      int c = 0;
      for( a ^= b; a != 0; a >>= 1)
        c += a & 1;
      return c;
    }
}