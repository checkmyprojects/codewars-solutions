//In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata).
// The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise.

// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c

function xor(a, b) {
    return a !== b;
}