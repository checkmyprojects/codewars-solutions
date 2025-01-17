// https://www.codewars.com/kata/55d6a0e4ededb894be000005

// Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

const encode = str => {
    return str.replace(/[a-z]/gi, l => {
      let cc = l.charCodeAt(0);
      return cc - (cc < 97 ? 64 : 96);
    });
}