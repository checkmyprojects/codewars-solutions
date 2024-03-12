// https://www.codewars.com/kata/58640340b3a675d9a70000b9

// This Kata is intended as a small challenge for my students

// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, ''); //hehe
  }