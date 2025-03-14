// https://www.codewars.com/kata/56bf3287b5106eb10f000899

// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

const moveVowel = ( $ ) => $.replace(/[aeiou]/g, '') + $.replace(/[^aeiou]/g, '')