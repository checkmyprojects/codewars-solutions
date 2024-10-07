// https://www.codewars.com/kata/5ce6728c939bf80029988b57

// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

// All inputs will be lowercase letters.

function solve(s) {
    if (s.length === 1) {
      return true;
    }
    const sortedChars = s.split('').sort().join('');

    for (let i=1; i<sortedChars.length; i++) {
      if (sortedChars.charCodeAt(i) - sortedChars.charCodeAt(i-1) !== 1) {
        return false
      }
    }
    return true;
  }