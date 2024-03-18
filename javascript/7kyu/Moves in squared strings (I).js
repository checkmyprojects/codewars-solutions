// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.

function vertMirror(strng) {
    return strng.split('\n').map(x => x.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct(s);
}