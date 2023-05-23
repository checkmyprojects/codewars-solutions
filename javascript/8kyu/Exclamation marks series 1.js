// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }