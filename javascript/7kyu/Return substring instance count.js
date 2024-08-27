// https://www.codewars.com/kata/5168b125faced29f66000005

// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

const solution = (text, search) => text.split(search).length - 1;