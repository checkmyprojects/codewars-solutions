// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

function last (words) {
    return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}