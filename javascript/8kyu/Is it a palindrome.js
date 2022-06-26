// Write a function that checks if a given string (case insensitive) is a palindrome.

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let y = x.split("").reverse().join("");
    return y.toLowerCase() == x.toLowerCase()
  }