// https://www.codewars.com/kata/57a62154cf1fa5b25200031e

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let newString = '';
    for (const char of s) {
      if (char === char.toLowerCase()){
        newString += char.toUpperCase();
      } else {
        newString += char.toLowerCase();
      }
    }
    return newString;
  }