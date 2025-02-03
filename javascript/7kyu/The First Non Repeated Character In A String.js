// https://www.codewars.com/kata/570f6436b29c708a32000826

// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

const firstNonRepeated = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null