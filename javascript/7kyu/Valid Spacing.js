// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8

// Task

// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters.

function validSpacing(s) {
    return s.trim() == s && !s.includes("  ");
  }