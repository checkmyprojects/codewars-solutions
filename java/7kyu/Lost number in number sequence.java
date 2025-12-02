// https://www.codewars.com/kata/595aa94353e43a8746000120

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// Example:

//     The starting array sequence is [1,2,3,4,5,6,7,8,9]
//     The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//     Your function should return the int 5.

// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

import java.util.Arrays;

class Kata {
    static int findDeletedNumber(final int[] array, final int[] mixedArray) {
        if (array.length == 0) {
            return 0;
        }
        final int expectedSum = (array.length * (array[0] + array[array.length - 1])) / 2;
        final int sum = Arrays.stream(mixedArray).sum();
        return expectedSum - sum;
    }
}