// https://www.codewars.com/kata/5c3433a4d828182e420f4197

// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
// Example:

// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

function ultimateReverse(words) {
    let reversed = [...words.join('')].reverse();
    return words.map(word => reversed.splice(0, word.length).join(''));
}