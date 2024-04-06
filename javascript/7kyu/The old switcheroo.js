// https://www.codewars.com/kata/55d410c492e6ed767000004f

// Write a function
// vowel2Index(String s)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. 

function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}