// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

public class ReverseNumber {

	public static int reverse(int number) {
		int result = 0;
    while(number != 0) {
      result = result * 10 + number % 10;
      number = number / 10;
    }
    return result;
	}

}