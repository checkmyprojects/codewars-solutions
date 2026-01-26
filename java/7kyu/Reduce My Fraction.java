// https://www.codewars.com/kata/576400f2f716ca816d001614

// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]

// All numerators and denominators will be positive integers.

import static java.math.BigInteger.valueOf;

interface Reduce {
  static int[] myFraction(int[] fractions) {
    int gcd = valueOf(fractions[0]).gcd(valueOf(fractions[1])).intValue();
    fractions[0] /= gcd;
    fractions[1] /= gcd;
    return fractions;
  }
}