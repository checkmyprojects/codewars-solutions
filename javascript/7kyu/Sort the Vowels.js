// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a

// Write a function which takes a input string s and return a string in the following way

function sortVowels(s){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if (typeof s === "string") return [...s].map(letter => vowels.includes(letter) ? `|${letter}` : `${letter}|`).join('\n');
    return '';
}