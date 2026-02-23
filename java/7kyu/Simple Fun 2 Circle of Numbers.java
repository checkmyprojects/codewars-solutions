// https://www.codewars.com/kata/58841cb52a077503c4000015

// Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.

class CircleOfNumbers {
  static int circleOfNumbers(int n, int firstNumber) {
    return (n / 2 + firstNumber) % n;
  }
}