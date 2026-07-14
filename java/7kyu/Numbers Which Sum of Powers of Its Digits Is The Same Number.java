// https://www.codewars.com/kata/560a4962c0cc5c2a16000068

// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eqSumPowdig(100, 2) ----> []

// eqSumPowdig(1000, 2) ----> []

// eqSumPowdig(200, 3) ----> [153]

// eqSumPowdig(370, 3) ----> [153, 370]

import java.util.List;
import java.util.ArrayList;

class Sumpowdig {
    
    public static long[] eqSumPowDig(long hmax, int exp) {
        List<Long> result = new ArrayList<>();
        for(long num=2; num <= hmax; num++) {
          long sumOfPow = sum(num, exp);
          if (sumOfPow == num)
        	  result.add(num);
        }
        return result.stream().mapToLong(Long::longValue).toArray();
    }
    
    private static long sum(long num, int exp) {
    	long sum = 0;
    	while (num > 0) {
    		sum += Math.pow(num % 10, exp);
    		num /= 10;
    	}
    	return sum;
    }
}