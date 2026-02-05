// https://www.codewars.com/kata/5959ec605595565f5c00002b

// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

import static java.lang.Integer.*;

interface BitsOfInteger {
    static int reverse_bits(int n) {
        return parseInt(new StringBuilder(toBinaryString(n)).reverse() + "", 2);
    }
}