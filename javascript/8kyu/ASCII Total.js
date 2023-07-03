// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

function uniTotal(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count += str.charCodeAt(i);
    }
    return count;
  }