// https://www.codewars.com/kata/5a21f943c5e284d4340000cb

// Take debugging to a whole new level:

// Given a string, remove every single bug.

// This means you must remove all instances of the word 'bug' from within a given string, unless the word is plural ('bugs').

// For example, given 'obugobugobuoobugsoo', you should return 'ooobuoobugsoo'.

// Another example: given 'obbugugo', you should return 'obugo'.

// Note that all characters will be lowercase.

function debug(s) {
  return s.replaceAll(/bug(?!s)/g, '');
}