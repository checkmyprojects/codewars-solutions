// https://www.codewars.com/kata/5aca48db188ab3558e0030fa

// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).
// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
// The possible return strings are: "addition", "subtraction", "multiplication", "division".

function calcType(a, b, res) {
    switch (res) {
      case a + b:
        return 'addition';
        break;
      case a - b:
        return 'subtraction';
        break;
      case a / b:
        return 'division';
        break;
      case a * b:
        return 'multiplication';
    }
  }