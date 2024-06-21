// https://www.codewars.com/kata/576bb3c4b1abc497ec000065

// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.

function compare(s1, s2) {
    const str = s => !s || /[^A-Za-z]/.test(s || "") ? "" : s.toUpperCase()
    const sum = s => [...s.toUpperCase()].reduce((n, c) => n + c.charCodeAt(0), 0)
    return sum(str(s1)) === sum(str(s2))
}