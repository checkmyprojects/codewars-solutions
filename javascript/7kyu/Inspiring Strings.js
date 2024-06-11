// https://www.codewars.com/kata/5939ab6eed348a945f0007b2

// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

function longestWord(str){
    return str.split(' ').sort((b, a) => b.length - a.length).pop();
}