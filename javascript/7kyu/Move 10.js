// https://www.codewars.com/kata/57cf50a7eca2603de0000090

// Move every letter in the provided string forward 10 letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.

function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}