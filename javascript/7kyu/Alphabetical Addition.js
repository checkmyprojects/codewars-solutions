// https://www.codewars.com/kata/5d50e3914861a500121e1958

// Your task is to add up letters to one letter.
// The function will be given an array of single character Strings, each one being a letter to add.

function addLetters(...letters) {
    const alpha = 'zabcdefghijklmnopqrstuvwxy';
    const sum = letters.reduce((sum, letter) => sum + alpha.indexOf(letter), 0) % 26;
    return alpha[sum];
}