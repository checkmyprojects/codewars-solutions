// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
}
