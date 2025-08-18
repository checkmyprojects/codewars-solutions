// https://www.codewars.com/kata/566fc12495810954b1000030

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

public class CountDig {
    
    public static int nbDig(int n, int d) {
      int sum = 0;
      for (int i = 0; i <= n; i++) {
        sum += countOfDigit((int) Math.pow(i, 2), d);
      }        
      return sum;
    }
    
    public static int countOfDigit(int n, int d) {
      int count = 0;
      do {
        if (n % 10 == d)
          count ++;
        n /= 10;
      } while (n > 0);
      return count;
    }
}