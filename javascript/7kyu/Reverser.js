// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

const reverse = n => {
    let result = 0;
    while (n > 0) {
      result = 10 * result + n % 10;
      n = Math.floor(n / 10);
    }
    return result;
  };