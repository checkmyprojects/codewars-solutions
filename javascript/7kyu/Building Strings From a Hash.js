// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

function solution(pairs){
    return Object.keys(pairs)
      .map(function(k) { return k + ' = ' + pairs[k] })
      .join(',');
  }