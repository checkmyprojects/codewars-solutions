// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

class Swapper {
  final Object[] arguments;

  Swapper(Object[] args) {
    arguments = args;
  }

  void swapValues() {
    Object temp = arguments[0];
    arguments[0] = arguments[1];
    arguments[1] = temp;
  }
}