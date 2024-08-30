// https://www.codewars.com/kata/565b112d09c1adfdd500019c

// Complete the function that takes an array of words.
// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

function nthChar(words){
    return words.map((str, i) => str.charAt(i)).join("");
}