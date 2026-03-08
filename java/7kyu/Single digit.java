// https://www.codewars.com/kata/5a7778790136a132a00000c1

// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

//     If the passed integer is already a single digit there is no need to reduce

//     n will be an integer such that 0 < n < 10⁹

class Kata {

    static int singleDigit(int n) {
        return n < 10 ? n : singleDigit(Integer.bitCount(n));
    }

}