// https://www.codewars.com/kata/58856a06760b85c4e6000055

// The odd and even numbers are fighting against each other!

// You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

// You should return:

//     odds win if number of 1s from odd numbers is larger than 0s from even numbers
//     evens win if number of 1s from odd numbers is smaller than 0s from even numbers
//     tie if equal, including if list is empty

// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

import java.util.Arrays;
public class BitsBattle {
  static String bitsBattle(int[] numbers) {
    int ones = Arrays.stream(numbers).filter(i -> i%2!=0).map(Integer::bitCount).sum();
    int zeros = Arrays.stream(numbers).filter(i -> i!=0 && i%2==0)
                                      .map(i -> Integer.toBinaryString(i).length() - Integer.bitCount(i))
                                      .sum();
    return ones>zeros ? "odds win" : ones<zeros ? "evens win" : "tie";
  }
}