// https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7

// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

function unscrambleEggs(word){
    return word.replace(/egg/g, "");
}