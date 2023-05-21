// Create a method all which takes two params:

//     a sequence
//     a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// https://www.codewars.com/kata/54598d1fcbae2ae05200112c

import static java.util.stream.IntStream.of;

import java.util.function.IntPredicate;

interface Solution {
  static boolean all(int[] list, IntPredicate predicate) {
    return of(list).allMatch(predicate);
  }
}