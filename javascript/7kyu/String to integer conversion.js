// https://www.codewars.com/kata/54fdadc8762e2e51e400032c

// JavaScript provides a built-in parseInt method.

// It can be used like this:

//     "10" returns 10
//     "10 apples" also returns 10

// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

// You are asked to write a function with the following rules:

//     It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
//     For all other strings (including the ones representing float values), it should return NaN
//     It should assume that all numbers are not signed and written in base 10

function myParseInt(str) {
    return /^\d+$/g.test(str.trim()) ? +str : NaN;
}